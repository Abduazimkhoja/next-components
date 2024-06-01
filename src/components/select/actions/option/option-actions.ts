import { TOptionActions, TOptionActionsObject } from './option-actions.type';

export const optionActions: TOptionActions = (
  { picked, setPicked },
  { isOpen, setIsOpen },
) => {
  const clearPicked: TOptionActionsObject['clear'] = () => setPicked([]);

  const isSelect: TOptionActionsObject['isSelect'] = (option) => {
    return picked.some((item) => item.id === option.id);
  };
  const deletePicked: TOptionActionsObject['delete'] = (option) => {
    setPicked((prev) => prev.filter((item) => item.id !== option.id));
  };

  const togglePicked: TOptionActionsObject['toggle'] = ({
    event,
    option,
    isMultiple,
  }) => {
    if (!option || option.disabled) return null;
    event.stopPropagation();
    if (isMultiple) {
      isSelect(option)
        ? deletePicked(option)
        : setPicked((prev) => [...prev, option]);
    } else if (option.id !== picked[0].id) {

      setPicked([option]);
      setIsOpen(false);
    }
  };

  const actionObject: TOptionActionsObject = {
    clear: clearPicked,
    isSelect,
    delete: deletePicked,
    toggle: togglePicked,
  };

  return actionObject;
};
