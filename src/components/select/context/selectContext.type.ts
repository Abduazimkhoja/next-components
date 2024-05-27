import { Dispatch, ReactNode, SetStateAction } from 'react';
import { TPicked } from '../container/SelectContainer';
import { TSelect, TSelectOptionWithId } from '../select.type';
import { TOptionActionsObject } from '../actions/option/option-actions.type';

export type TSelectContextProvider = {
  children: ReactNode;
  value: TSelectContext;
};

export type TSelectContext = {
  optionActions: TOptionActionsObject;
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  optionsWithId: TSelectOptionWithId[];
  onChange: TSelect['onChange'];
};
