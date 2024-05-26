import { FC, createContext, useContext } from 'react';
import { TSelectContext, TSelectContextProvider } from './selectContext.type';

const SelectContext = createContext<TSelectContext | undefined>(undefined);

const SelectContextProvider: FC<TSelectContextProvider> = ({
  children,
  value,
}) => {
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};

export const useSelectContext = () => {
  const context = useContext<TSelectContext | undefined>(SelectContext);
  if (!context) {
    throw new Error('useSelectContext must be used within a SelectContainer');
  }
  return context;
};

export default SelectContextProvider;
