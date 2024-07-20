import { useCallback, useState } from "react";
import Header from "./Header";
import List from "./List";
import ListInput from "./ListInput";
import { HeaderContextProvider } from "../context/header.context";

const ListApp = () => {
  return (
    <>
      <HeaderContextProvider>
        <Header />
      </HeaderContextProvider>
      <ListInput />

      <List />
    </>
  );
};

export default ListApp;
