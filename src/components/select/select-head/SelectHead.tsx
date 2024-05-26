import { FC } from 'react';
import ClearButton from '../actions/ClearButton';
import Label from '../label/Label';

const SelectHead: FC = () => {
  return (
    <div>
      <Label label='label'></Label>
      <ClearButton />
    </div>
  );
};

export default SelectHead;
