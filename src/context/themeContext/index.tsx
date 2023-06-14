import React, { createContext, useContext, useMemo, useReducer } from 'react';
import { breakpoints, colors, getColors } from '../../theme';
import { ColorsType } from '../../@types/colors';

type Props = {
  children: React.ReactNode;
};
type ReducerArgState = {
  colors: ColorsType;
};
type PayloadType = {
  color: string;
};
type ReducerArgAction = {
  type: string;
  payload: PayloadType;
};
type CustomThemeContextType = {
  changeColors: (data: PayloadType) => void;
  colors: ColorsType;
};

const CustomThemeContext = createContext<CustomThemeContextType>(
  {} as CustomThemeContextType
);

export const useCustomTheme = () => {
  return useContext(CustomThemeContext);
};

const CHANGE_COLORS = 'CHANGE_COLORS';

const reducer = (state: ReducerArgState, action: ReducerArgAction) => {
  switch (action.type) {
    case CHANGE_COLORS:
      return {
        ...state,
        colors: getColors(action.payload.color)
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  colors: colors.main
};

const CustomThemeProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const stateHandler = useMemo(() => {
    return {
      changeColors: (data: PayloadType) =>
        dispatch({ type: CHANGE_COLORS, payload: data })
    };
  }, [state]);

  return (
    <CustomThemeContext.Provider
      value={{ colors: state.colors, changeColors: stateHandler.changeColors }}
    >
      {children}
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
