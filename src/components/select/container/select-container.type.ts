import { ReactNode } from 'react';
import { TSelect } from '../select.type';

export type TSelectContainer = {
  children: ReactNode;
  className?: string;
} & Pick<TSelect, 'options' | 'onChange' | 'multiple'>;
