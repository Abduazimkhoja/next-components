import { FC } from 'react';
import { useSelectContext } from './context/SelectContext';
import { cn } from './select-utils';

const ClearButton: FC = () => {
  const { optionActions } = useSelectContext();
  const clearButtonClass = cn('select__clear');

  return (
    <button
      onClick={(event) => {
        event.stopPropagation();
        optionActions.clear();
      }}
      className={clearButtonClass}
    ></button>
  );
};

export default ClearButton;
