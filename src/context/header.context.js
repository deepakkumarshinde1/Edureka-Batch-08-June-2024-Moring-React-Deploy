import { createContext, useContext } from "react";

let HeaderContext = createContext();

export function HeaderContextProvider(props) {
  let { children } = props;
  let values = {
    title: "My Todo App",
  };
  return (
    <>
      <HeaderContext.Provider value={values}>{children}</HeaderContext.Provider>
    </>
  );
}

export function useHeaderContext() {
  return useContext(HeaderContext);
}
