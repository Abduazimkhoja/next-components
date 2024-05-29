import { FC } from 'react';
import { TLabel } from './label.type';
import { useSelectContext } from '../context/SelectContext';
import { cn } from '../select-utils';

const Label: FC<TLabel> = ({ option }) => {
  const { isMultiple, optionActions } = useSelectContext();

  const labelClass = cn(
    'select__label',
    isMultiple ? 'select__label-multiple' : '',
  );
  return (
    <div className={labelClass}>
      <span>{option.label}</span>
      <button onClick={() => optionActions.delete(option)}>&times;</button>
    </div>
  );
};

export default Label;
