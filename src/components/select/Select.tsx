'use client';
import { FC, useMemo } from 'react';
import './SelectVar.scss';
import './Select.scss';

import SelectContainer from './container/SelectContainer';
import SelectHead from './head/SelectHead';
import SelectMenu from './menu/Menu';
import { TSelect, TSelectOptionWithId } from './select.type';

export const Select: FC<TSelect> = (props) => {
  const { options, onChange, placeholder, defaultValueIndex, isMultiple } =
    props;

  const [optionsWithId, pickedOptions] = useMemo(() => {
    const setId: TSelectOptionWithId[] = options.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    let selectedOptions: TSelectOptionWithId[] = [];

    if (isMultiple) {
      selectedOptions = setId.filter(({ selected }) => selected);
    } else {
      const findSelected = setId.find(({ selected }) => selected);
      selectedOptions = findSelected ? [findSelected] : [];
    }

    return [setId, selectedOptions];
  }, [options]);

  const selectConteinerProps = {
    optionsWithId,
    pickedOptions,
    onChange,
    isMultiple,
  };

  return (
    <SelectContainer {...selectConteinerProps}>
      <SelectHead></SelectHead>
      <SelectMenu></SelectMenu>
    </SelectContainer>
  );
};

// export const Select: FC<TSelect> = (props) => {
//   const {
//     options,
//     onChange,
//     placeholder,
//     defaultValueIndex,
//     multiple,
//     ...rest
//   } = props;
//   const [isOpen, setIsOpen] = useState<boolean>();
//   const selectedOption = useMemo((): number[] => {
//     if (defaultValueIndex !== undefined && !options[defaultValueIndex].disabled)
//       return [defaultValueIndex];
//     if (!multiple) {
//       const selectedIndex = options.findIndex(
//         (item) => item.selected && !item.disabled,
//       );
//       return selectedIndex !== -1 ? [selectedIndex] : [];
//     }
//     return options
//       .map((item, index) =>
//         item.selected && !item.disabled ? index : undefined,
//       )
//       .filter((item): item is number => item !== undefined);
//   }, [defaultValueIndex, multiple, options]);
//   const [selectedIndexes, setselectedIndexes] =
//     useState<number[]>(selectedOption);

//   const selectLabels: TSelectOnChangeLabelParam = (() => {
//     if (!(selectedIndexes.length > 0)) return multiple ? [] : '';
//     return multiple
//       ? selectedIndexes.map((index) => options[index].label)
//       : options[selectedIndexes[0]].label;
//   })();

//   useEffect(() => {
//     onChange(selectLabels);
//   }, [selectedIndexes]);

//   const classList = {
//     select: cn(styles.select, styles['select-var'], styles.multiple),
//     options: cn(styles.options, isOpen ? styles.show : ''),
//     option: (index: number, disabled?: boolean) =>
//       cn(
//         styles.option,
//         selectedIndexes.includes(index) ? styles.active : '',
//         disabled ? styles.disabled : '',
//       ),
//   };

//   const clearOption: MouseEventHandler<HTMLButtonElement> = (e) => {
//     e.stopPropagation();
//     setselectedIndexes([]);
//     onChange(multiple ? [] : '');
//   };

//   const handleOption = (
//     event: MouseEvent<HTMLLIElement>,
//     index: number,
//     disabled?: boolean,
//   ) => {
//     if (disabled) return event.stopPropagation();
//     if (multiple) {
//       if (selectedIndexes.includes(index)) {
//         setselectedIndexes((prev) =>
//           [...prev].filter((optionIndex) => optionIndex !== index),
//         );
//       } else {
//         setselectedIndexes((prev) => [...prev, index]);
//       }
//     } else setselectedIndexes([index]);
//   };

//   return (
//     <div
//       onClick={() => setIsOpen((prev) => !prev)}
//       onBlur={() => setIsOpen(false)}
//       tabIndex={0}
//       aria-label='select'
//       className={classList.select}
//       {...rest}
//     >
//       <span data-placeholder={placeholder} className={styles.label}>
//         {multiple && Array.isArray(selectLabels)
//           ? selectLabels.map((label) => (
//               <button key={label} className={styles['multi__label']}>
//                 {label}
//                 <span
//                   onClick={() => handleOption()}
//                   className={styles['multi__label-remove']}
//                 ></span>
//               </button>
//             ))
//           : selectLabels}
//       </span>
//       <button className={styles.caret} onClick={clearOption}></button>
//       <ul className={classList.options}>
//         {options.map(({ value, label, disabled }, index) => (
//           <li
//             key={value}
//             onClick={(e) => handleOption(e, index, disabled)}
//             className={classList.option(index, disabled)}
//           >
//             {label}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// onChange, mode, placeholder, disabled, defaultValue, allowClear, size, placement

// showSearch - Доступен ли поиск в select (input)
// filterOption - Принимает функцию фильтрации

// расположения options (top, left, right, bottom) or cutom(x,y)
// нужно реализовать управление по tab
export default Select;
