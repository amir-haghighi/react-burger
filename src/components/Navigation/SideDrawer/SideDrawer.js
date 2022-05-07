import { useEffect } from "react";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import Classes from "./SideDrawer.module.css";
const SideDrawer = (props) => {
  // useEffect(() => {
  //   console.log("SideBar");
  // });
  return (
    <>
      <Backdrop show={props.open} onClick={props.toggleSide} />
      <div
        className={
          props.open
            ? `${Classes.SideDrawer} ${Classes.Open}`
            : `${Classes.SideDrawer} ${Classes.Close}`
        }
      >
        <div className={Classes.Logo}>
          <Logo />
        </div>
        <NavigationItems />
      </div>
    </>
  );
};
export default SideDrawer;
