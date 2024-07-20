import { useListContext } from "../context/list.context";

function ListInput() {
  let { inputChange, saveToList, inputText } = useListContext();
  return (
    <>
      <input type="text" value={inputText} onChange={inputChange} />
      <button onClick={saveToList}>Save</button>
    </>
  );
}

export default ListInput;
