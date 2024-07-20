export let todoInitialState = {
  inputText: "",
  list: [],
};

// action
export const todoActions = {
  INPUT_CHANGE: "inputChange",
  SAVE_TODO: "saveTodo",
  REMOVE_TODO: "removeTodo",
};

export function action(actionType, payload) {
  return { type: actionType, payload };
}

export const todoReducer = (state = todoInitialState, action) => {
  let { type, payload } = action;
  let _list = [...state.list];

  switch (type) {
    case todoActions.INPUT_CHANGE:
      return { ...state, inputText: payload };

    case todoActions.SAVE_TODO:
      _list.push(state.inputText);
      return { ...state, list: _list, inputText: "" };

    case todoActions.REMOVE_TODO:
      _list.splice(payload, 1);
      return { ...state, list: _list };
    default:
      return { ...state };
  }
};
