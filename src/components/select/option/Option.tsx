import { FC } from 'react';
import { useSelectContext } from '../context/SelectContext';
import { TOption } from './option.type';
import { cn } from '../select-utils';

const Option: FC<TOption> = ({ option }) => {
  const { optionActions, isMultiple } = useSelectContext();
  const isActive = optionActions.isSelect(option);

  const optionClass = cn(
    'select__option',
    isActive ? 'select__option-active' : '',
    option.disabled ? 'select__option-disabled' : '',
  );

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    optionActions.toggle({ event, option, isMultiple });
  };

  return (
    <li onClick={handleClick} className={optionClass}>
      {option.label}
    </li>
  );
};

export default Option;
