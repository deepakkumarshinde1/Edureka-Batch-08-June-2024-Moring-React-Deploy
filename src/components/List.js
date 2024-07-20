import { memo } from "react";
import { useListContext } from "../context/list.context";

const List = () => {
  let { list, removeItem } = useListContext();
  return (
    <>
      <ul>
        {list.map((value, index) => {
          return (
            <li key={index}>
              {value} <button onClick={() => removeItem(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default memo(List);
