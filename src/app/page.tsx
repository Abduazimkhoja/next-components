'use client';
import { Select } from '@/components';
import { optionsData } from '@/data/options-data';
import { useState } from 'react';

export default function Home() {
  const [select, setSelect] = useState(
    optionsData.find((item, index) => (item.selected ? index : false)) || 0,
  );

  console.log(select);

  const onChange = () => {
    // setSelect();
  };
  return (
    <main>
      <Select onChange={onChange} options={optionsData} />
    </main>
  );
}
24;
