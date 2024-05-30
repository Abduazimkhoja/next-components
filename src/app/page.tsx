'use client';
import { Select } from '@/components';
import {
  TSelect,
  TSelectOnChangeLabelParam,
} from '@/components/select/select.type';
import { optionsData } from '@/data/options-data';
import { useState } from 'react';

export default function Home() {
  const [select, setSelect] = useState<TSelectOnChangeLabelParam>([]);

  const onChange: TSelect['onChange'] = (label) => {
    setSelect(label);
  };

  return (
    <main>
      <Select
        isMultiple
        onChange={onChange}
        options={optionsData}
        placeholder='select'
      />
    </main>
  );
}
