import { createContext } from "react";

const UIContext = createContext({
  theme: "light",
  toggleTheme: () => {}
});

export default UIContext;
