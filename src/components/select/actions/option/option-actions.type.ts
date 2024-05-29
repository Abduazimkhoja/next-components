import { Dispatch, MouseEvent, SetStateAction } from 'react';
// import { TPicked } from '../../container/SelectContainer';
import { TSelectOptionWithId } from '../../select.type';

type TDelete = (option: TSelectOptionWithId) => void;
type TIsSelect = (option: TSelectOptionWithId) => boolean;

type TToggle = (props: {
  event: MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLLIElement>;
  option: TSelectOptionWithId;
  isMultiple?: boolean;
}) => void;

export type TOptionActionsObject = {
  clear: () => void;
  delete: TDelete;
  toggle: TToggle;
  isSelect: TIsSelect;
};

type pickState = {
  picked: TSelectOptionWithId[];
  setPicked: Dispatch<SetStateAction<TSelectOptionWithId[]>>;
};

type isOpenState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type TOptionActions = (
  pickState: pickState,
  isOpenState: isOpenState,
) => TOptionActionsObject;
