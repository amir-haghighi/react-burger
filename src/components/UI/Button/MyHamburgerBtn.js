import Classes from "./MyHamburgerBtn.module.css";

const MyHamburgerBtn = (props) => (
  <div onClick={props.onClick} className={Classes.HamburgerBtn}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
export default MyHamburgerBtn;
