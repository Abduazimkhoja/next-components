'use client';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import SelectButton from '../SelectButton';
import { useSelectContext } from '../context/SelectContext';
import Label from '../label/Label';

const SelectHead: FC = () => {
  const {
    picked,
    isMultiple,
    handleSearchOptions,
    placeholder,
    showSearch,
    clearSearch,
  } = useSelectContext();

  const label = picked[0]?.label || '';
  const [value, setValue] = useState(isMultiple ? '' : label);

  useEffect(() => {
    setValue(isMultiple ? '' : label);
  }, [picked]);

  const inputAttr = {
    onBlur: () => {
      setTimeout(() => clearSearch(), 100)
      setValue(label);
    },
    onFocus: () => {
      setValue('');
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      handleSearchOptions(e);
    },
    readOnly: isMultiple || showSearch ? false : true,
    placeholder: isMultiple ? '' : label,
    value: value,
  };

  return (
    <div className='select__head'>
      <div className='select__labels'>
        {isMultiple &&
          picked.map((option) => {
            return <Label key={option.id} option={option}></Label>;
          })}
        <input unselectable='on' type='search' role='combobox' {...inputAttr} />
      </div>
      <SelectButton />
    </div>
  );
};

export default SelectHead;
