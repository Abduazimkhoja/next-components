import { ChangeEvent, MouseEvent, ReactNode } from 'react';
import { TOptionActionsObject } from '../actions/option/option-actions.type';
import { TSelect, TSelectOptionWithId } from '../select.type';

export type TSelectContextProvider = {
  children: ReactNode;
  value: TSelectContext;
};

export type TSelectContext = {
  highlightIndex: number
  clearSearch: () => void
  searchOptions: TSelectOptionWithId[];
  handleSearchOptions: (event: ChangeEvent<HTMLInputElement>) => void;
  isMultiple?: boolean;
  picked: TSelectOptionWithId[];
  optionActions: TOptionActionsObject;
  isOpen: boolean;
  toggleDropdown: (event: MouseEvent) => void;
  closeDropdown: () => void;
  optionsWithId: TSelectOptionWithId[];
} & Pick<TSelect, 'showSearch' | 'onChange' | 'placeholder'>;
