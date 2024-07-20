import { memo } from "react";
import { useHeaderContext } from "../context/header.context";

const Header = () => {
  let { title } = useHeaderContext();
  return <h4>{title}</h4>;
};

export default memo(Header);

// pure component --> not re-render on parent comp rendering
// memo --> HOC
