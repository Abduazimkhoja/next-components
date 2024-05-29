import { FC } from 'react';
import { useSelectContext } from '../context/SelectContext';
import { TOption } from './option.type';
import { cn } from '../select-utils';

const Option: FC<TOption> = ({ option }) => {
  const { optionActions, isMultiple, isOpen } = useSelectContext();
  const isActive = optionActions.isSelect(option);
  console.log(isOpen);
  

  const optionClass = cn(
    'select__option',
    isActive ? 'select__option-active' : '',
    option.disabled ? 'select__option-disabled' : '',
  );

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    optionActions.toggle({ event, option, isMultiple });
  };

  return (
    <li onClick={handleClick} className={optionClass}>
      <button disabled={option.disabled}>
        {option.label}
      </button>
    </li>
  );
};

export default Option;
