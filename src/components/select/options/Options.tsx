import { FC } from 'react';
import { useSelectContext } from '../select-context/SelectContext';

const Options: FC = () => {
  const { isOpen, toggleDropdown, closeDropdown } = useSelectContext();
  return <div>{isOpen ? 'open' : 'close'}</div>;
  // return (
  //   <ul className={classList.options}>
  //     {options.map(({ value, label, disabled }, index) => (

  //     ))}
  //   </ul>
  // );
};

export default Options;
