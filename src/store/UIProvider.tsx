import { FC, useReducer } from "react";
import UIContext from "./UIContext";
import { ToggleState, ToggleAction } from "./types";

const defaultUIState = {
  theme: "light"
};

const UIReducer = (state: ToggleState, action: ToggleAction): ToggleState => {
  if (action.type === "TOGGLE") {
    let updatedTheme = state.theme === "light" ? "dark" : "light";
    return {
      theme: updatedTheme
    };
  }

  return defaultUIState;
};

const UIProvider: FC = ({ children }) => {
  const [uiState, dispatchUIAction] = useReducer(UIReducer, defaultUIState);

  const toggleThemeHandler = () => {
    dispatchUIAction({ type: "TOGGLE" });
  };

  const uiContext = {
    theme: uiState.theme,
    toggleTheme: toggleThemeHandler
  };

  return <UIContext.Provider value={uiContext}>{children}</UIContext.Provider>;
};

export default UIProvider;
