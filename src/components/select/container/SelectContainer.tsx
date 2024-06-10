import { FC, useEffect, useRef, useState } from 'react';
import { optionActions } from '../actions/option/option-actions';
import SelectContextProvider from '../context/SelectContext';
import { TSelectContext } from '../context/selectContext.type';
import { cn } from '../select-utils';
import { TSelectOptionWithId } from '../select.type';
import { TSelectContainer } from './select-container.type';

const SelectContainer: FC<TSelectContainer> = ({
  children,
  onChange,
  className,
  optionsWithId,
  pickedOptions,
  isMultiple,
  placeholder,
  showSearch,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [picked, setPicked] = useState<TSelectOptionWithId[]>(pickedOptions);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchOptions, setSearchOptions] =
    useState<TSelectOptionWithId[]>(optionsWithId);

  const handleSearchOptions: TSelectContext['handleSearchOptions'] = ({
    target,
  }) => {
    const optionSearch = optionsWithId.filter(({ label }) =>
      label.toLowerCase().includes(target.value.toLowerCase()),
    );
    setSearchOptions(optionSearch);
  };

  const clearSearch = () => {
    setSearchOptions(optionsWithId);
  };

  useEffect(() => {
    onChange(picked.map(({ label }) => label));
  }, [picked]);

  const closeDropdown = () => setIsOpen(false);
  const toggleDropdown: TSelectContext['toggleDropdown'] = (e) => {
    const isInput = e.target instanceof HTMLInputElement;

    if (!isInput && isOpen === true) closeDropdown();
    else setIsOpen(true);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside, true);
    };
  }, []);

  const optionActionsObject = optionActions(
    { picked, setPicked },
    { isOpen, setIsOpen },
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != dropdownRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space': {
          setIsOpen((prev) => !prev);
          if (isOpen)
            optionActionsObject.toggle({
              event: e,
              option: optionsWithId[highlightIndex],
            });
          break;
        }
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }
          const newValue = highlightIndex + (e.code == 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < optionsWithId.length) {
            setHighlightIndex(newValue);
          }
          break;
        }
        case 'Escape': {
          setIsOpen(false);
          break;
        }
      }
    };
    dropdownRef.current?.addEventListener('keydown', handler);
    return () => {
      dropdownRef.current?.removeEventListener('keydown', handler);
    };
  }, [isOpen, highlightIndex, optionsWithId]);

  const containerClass = cn(
    'select-normalize',
    'select',
    'select__container',
    'select-var',
    isMultiple ? 'select-multiple' : '',
    'focus-visible',
    className || '',
  );

  const contextValue: TSelectContext = {
    highlightIndex,
    clearSearch,
    showSearch,
    placeholder,
    searchOptions,
    handleSearchOptions,
    picked,
    optionActions: optionActionsObject,
    optionsWithId,
    isOpen,
    onChange,
    toggleDropdown,
    closeDropdown,
    isMultiple,
  };

  return (
    <SelectContextProvider value={contextValue}>
      <div
        ref={dropdownRef}
        onClick={toggleDropdown}
        tabIndex={0}
        aria-label='select'
        className={containerClass}
      >
        {children}
      </div>
    </SelectContextProvider>
  );
};

export default SelectContainer;
