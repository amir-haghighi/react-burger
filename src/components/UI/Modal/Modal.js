import { memo, useEffect } from "react";
import Backdrop from "../Backdrop/Backdrop";
import Classes from "./Modal.module.css";

const Modal = (props) => {
  // useEffect(() => {
  //   console.log("modal updated!");
  // });
  return (
    <>
      <Backdrop show={props.show} onClick={props.close} />
      <div
        className={Classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-120vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </>
  );
};
export default memo(Modal, (props, nextProps) => {
  if (props.show === nextProps.show) {
    return true;
  }
});
