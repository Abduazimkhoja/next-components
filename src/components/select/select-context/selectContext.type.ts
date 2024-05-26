import { ReactNode } from 'react';

export type TSelectContext = {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
};

export type TSelectContextProvider = {
  children: ReactNode;
  value: TSelectContext;
};
