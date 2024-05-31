import { ChangeEvent, ReactNode } from 'react';
import { TOptionActionsObject } from '../actions/option/option-actions.type';
import { TSelect, TSelectOptionWithId } from '../select.type';

export type TSelectContextProvider = {
  children: ReactNode;
  value: TSelectContext;
};

export type TSelectContext = {
  searchOptions: TSelectOptionWithId[];
  handleSearchOptions: (event: ChangeEvent<HTMLInputElement>) => void;
  isMultiple?: boolean;
  picked: TSelectOptionWithId[];
  optionActions: TOptionActionsObject;
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
  optionsWithId: TSelectOptionWithId[];
  onChange: TSelect['onChange'];
  placeholder?: TSelect['placeholder']
};
