import { TOptionActions, TOptionActionsObject } from './option-actions.type';

export const optionActions: TOptionActions = (
  { picked, setPicked },
  { isOpen, setIsOpen },
) => {
  const clearPicked: TOptionActionsObject['clear'] = () => setPicked([]);

  const isSelect: TOptionActionsObject['isSelect'] = (option) => {
    // isPicked
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
    if (option.disabled) return event.stopPropagation();
    if (isMultiple) {
      if (isSelect(option)) deletePicked(option);
      else setPicked((prev) => [...prev, option]);
    } else {
      if (option.id === picked[0].id) setPicked([]);
      else setPicked([option]);
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
