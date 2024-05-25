import { TSelectOption } from '@/components/select/select.type';

export const optionsData: TSelectOption[] = [
  { label: 'Electronics', value: 'electronics', selected: true },
  { label: 'Books', value: 'books' },
  { label: 'Clothing', value: 'clothing', selected: true },
  { label: 'Home & Kitchen', value: 'home_kitchen', disabled: true },
  { label: 'Sports & Outdoors', value: 'sports_outdoors' },
  {
    label: 'Beauty & Personal Care',
    value: 'beauty_personal_care',
    selected: true,
  },
];
