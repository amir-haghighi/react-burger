import burgerLogo from "../../assets/images/burger-logo.png";
import Classes from "./Logo.module.css";
const Logo = (props) => (
  <div className={Classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);
export default Logo;
