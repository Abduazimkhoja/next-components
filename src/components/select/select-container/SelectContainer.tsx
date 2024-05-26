import { FC, ReactNode, useState } from 'react';
import SelectContextProvider from '../select-context/SelectContext';
import { TSelectContext } from '../select-context/selectContext.type';
import { cn } from '../select-utils';
import './SelectContainer.scss';

type TSelectContainer = { children: ReactNode; className?: string };

const SelectContainer: FC<TSelectContainer> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  const containerClass = cn('select', 'select-var', className || '');

  const selectContextValue: TSelectContext = {
    isOpen,
    toggleDropdown,
    closeDropdown,
  };

  return (
    <SelectContextProvider value={selectContextValue}>
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
