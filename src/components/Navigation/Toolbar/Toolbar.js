import Logo from "../../Logo/Logo";
import Classes from "./Toolbar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import MyHamburgerBtn from "../../UI/Button/MyHamburgerBtn";
const Toolbar = (props) => (
  <header className={Classes.Toolbar}>
    <div onClick={props.toggleSide}>
      <div className={Classes.HamburgerBtn}>
        <MyHamburgerBtn />
      </div>
    </div>
    <div className={Classes.Logo}>
      <Logo />
    </div>
    <div className={Classes.MobileOnly}>
      <NavigationItems />
    </div>
  </header>
);
export default Toolbar;
