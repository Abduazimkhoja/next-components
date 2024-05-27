import { Dispatch, SetStateAction } from 'react';
import { TPicked } from '../../container/SelectContainer';
import { TSelectOptionWithId } from '../../select.type';

type TDelete = (option: TSelectOptionWithId) => void;
type TIsSelect = (option: TSelectOptionWithId) => boolean;

type TToggle = (props: {
  event: MouseEvent;
  option: TSelectOptionWithId;
  isMultiple?: boolean;
}) => void;

export type TOptionActionsObject = {
  clear: VoidFunction;
  delete: TDelete;
  toggle: TToggle;
  isSelect: TIsSelect;
};

type pickState = {
  picked: TPicked;
  setPicked: Dispatch<SetStateAction<TPicked>>;
};

type isOpenState = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export type TOptionActions = (
  pickState: pickState,
  isOpenState: isOpenState,
) => TOptionActionsObject;
