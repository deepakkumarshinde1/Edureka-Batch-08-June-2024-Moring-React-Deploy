import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import {
  action,
  todoActions,
  todoInitialState,
  todoReducer,
} from "../reducers/todo.reducer";

// context
let ListContext = createContext({});

// provider (component)
export function ListContextProvider(props) {
  let { children } = props;
  let [state, dispatch] = useReducer(todoReducer, todoInitialState);

  let inputChange = (event) => {
    dispatch(action(todoActions.INPUT_CHANGE, event.target.value));
  };

  let saveToList = () => {
    dispatch(action(todoActions.SAVE_TODO));
  };

  let removeItem = useCallback(
    (index) => {
      dispatch(action(todoActions.REMOVE_TODO, index));
    },
    [state.list]
  );

  // share values
  let values = {
    inputChange,
    saveToList,
    inputText: state.inputText,
    list: state.list,
    removeItem,
  };
  return (
    <>
      <ListContext.Provider value={values}>{children}</ListContext.Provider>
    </>
  );
}

// hook
export function useListContext() {
  return useContext(ListContext);
}
