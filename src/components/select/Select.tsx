'use client';
import { FC, useMemo } from 'react';
import './SelectVar.scss';
import './Select.scss';

import SelectContainer from './container/SelectContainer';
import SelectHead from './head/SelectHead';
import SelectMenu from './menu/Menu';
import { TSelect, TSelectOptionWithId } from './select.type';

export const Select: FC<TSelect> = (props) => {
  const { options, onChange, placeholder, defaultValueIndex, isMultiple, showSearch, className } =
    props;

  const [optionsWithId, pickedOptions] = useMemo(() => {
    const setId: TSelectOptionWithId[] = options.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    let selectedOptions: TSelectOptionWithId[] = [];

    if (isMultiple) {
      selectedOptions = setId.filter(({ selected }) => selected);
    } else {
      const findSelected = setId.find(({ selected }) => selected);
      selectedOptions = findSelected ? [findSelected] : [];
    }

    return [setId, selectedOptions];
  }, [options]);

  const selectConteinerProps = {
    showSearch,
    placeholder,
    optionsWithId,
    pickedOptions,
    onChange,
    isMultiple,
  };

  return (
    <SelectContainer {...selectConteinerProps}>
      <SelectHead></SelectHead>
      <SelectMenu></SelectMenu>
    </SelectContainer>
  );
};

// onChange, mode, placeholder, disabled, defaultValue, allowClear, size, placement

// showSearch - Доступен ли поиск в select (input)
// filterOption - Принимает функцию фильтрации

// расположения options (top, left, right, bottom) or cutom(x,y)
// нужно реализовать управление по tab
export default Select;
