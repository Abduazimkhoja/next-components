export type TSelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
  selected?: boolean;
};

export type TSelectOnChangeLabelParam = string[] | string;

export type TSelect = {
  options: TSelectOption[];
  placeholder?: string;
  defaultValueIndex?: number;
  onChange: (label: TSelectOnChangeLabelParam) => void;
  multiple?: boolean;
};
