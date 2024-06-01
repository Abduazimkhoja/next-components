import { ReactNode } from 'react';
import { TSelect, TSelectOptionWithId } from '../select.type';

export type TSelectContainer = {
  children: ReactNode;
  className?: string;
  optionsWithId: TSelectOptionWithId[];
  pickedOptions: TSelectOptionWithId[];
} & Pick<TSelect, 'onChange' | 'isMultiple' | 'placeholder' | 'showSearch'>;
