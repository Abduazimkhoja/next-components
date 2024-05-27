import { FC, useState } from 'react';
import { optionActions } from '../actions/option/option-actions';
import SelectContextProvider from '../context/SelectContext';
import { TSelectContext } from '../context/selectContext.type';
import { cn } from '../select-utils';
import { TSelectOptionWithId } from '../select.type';
import './SelectContainer.scss';
import { TSelectContainer } from './select-container.type';

export type TPicked = TSelectOptionWithId[];

export type TTogglePicked = (
  option: TSelectOptionWithId,
  event: MouseEvent,
  isMultiple?: boolean,
) => void;

const SelectContainer: FC<TSelectContainer> = ({
  children,
  options,
  onChange,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [picked, setPicked] = useState<TPicked>([]);
  const optionsWithId = options?.map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const optionActionsObject = optionActions(
    { picked, setPicked },
    { isOpen, setIsOpen },
  );

  const containerClass = cn('select', 'select-var', className || '');

  const contextValue: TSelectContext = {
    optionActions: optionActionsObject,
    optionsWithId,
    isOpen,
    onChange,
    toggleDropdown,
    closeDropdown,
  };

  return (
    <SelectContextProvider value={contextValue}>
      <div
        onClick={toggleDropdown}
        onBlur={closeDropdown}
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
