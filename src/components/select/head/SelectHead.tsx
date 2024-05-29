'use client';
import { ChangeEvent, FC, MouseEvent, useState } from 'react';
import ClearButton from '../ClearButton';
import { useSelectContext } from '../context/SelectContext';
import Label from '../label/Label';
import { TSelectOptionWithId } from '../select.type';

const SelectHead: FC = () => {
  const {
    picked,
    isMultiple,
    toggleDropdown,
    handelSearchOptions,
  } = useSelectContext();

  const handleInputClick = (event: MouseEvent<HTMLInputElement>) => {
    event.stopPropagation();
    toggleDropdown();
  };

  return (
    <div className='select__head'>
      <div className='select__labels'>
        {isMultiple &&
          picked.map((option) => {
            return <Label key={option.id} option={option}></Label>;
          })}
        <input
          onChange={handelSearchOptions}
          onClick={handleInputClick}
          unselectable='on'
          readOnly={!isMultiple}
          // placeholder='Select'
          type='search'
          defaultValue={isMultiple ? '' : picked[0].label}
          autoComplete='off'
          role='combobox'
        />
      </div>
      <ClearButton />
    </div>
  );
};

export default SelectHead;
