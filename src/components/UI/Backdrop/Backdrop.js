import { memo, useEffect } from "react";
import Classes from "./Backdrop.module.css";
const Backdrop = (props) => {
  // useEffect(() => {
  //   console.log("Backdrop worked !!");
  // });
  return props.show ? (
    <div className={Classes.Backdrop} onClick={props.onClick}></div>
  ) : null;
};
export default memo(Backdrop, (props, nextProps) => {
  if (props.show === nextProps.show) {
    return true;
  }
});
