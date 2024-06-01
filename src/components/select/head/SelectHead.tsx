'use client';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import ClearButton from '../ClearButton';
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
    setValue(label);
  }, [picked]);

  const inputAttr = {
    onBlur: () => {
      clearSearch();
      setValue(label);
    },
    onFocus: () => {
      setValue('');
    },
    onChange: (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      handleSearchOptions(e);
    },
    readOnly: !showSearch,
    placeholder: label,
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
      <ClearButton />
    </div>
  );
};

export default SelectHead;
