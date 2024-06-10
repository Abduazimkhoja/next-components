import { FC, MouseEvent } from 'react';
import { useSelectContext } from './context/SelectContext';
import { cn } from './select-utils';

const SelectButton: FC = () => {
  const { optionActions, isMultiple } = useSelectContext();
  const clearButtonClass = cn(
    'select__button',
    isMultiple ? 'select__button-clear' : 'select__button-search',
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (isMultiple) {
      event.stopPropagation();
      optionActions.clear();
    }
  };

  return <button onClick={handleClick} className={clearButtonClass}></button>;
};

export default SelectButton;
