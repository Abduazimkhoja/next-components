import { FC } from 'react';
import { useSelectContext } from '../context/SelectContext';
import Option from '../option/Option';
import { cn } from '../select-utils';

const SelectMenu: FC = () => {
  const { isOpen, searchOptions } = useSelectContext();

  const menuClass = cn('select__menu', isOpen ? 'select__menu-show' : '');

  return (
    <ul className={menuClass}>
      {searchOptions.length ? (
        searchOptions.map((option) => {
          return <Option key={option.id} option={option} />;
        })
      ) : (
        <div className='select__notfound'>Not found</div>
      )}
    </ul>
  );
};

export default SelectMenu;
