import Classes from "./NavigationItem.module.css";
import { NavLink } from "react-router-dom";
const NavigationItem = (props) => (
  <li className={Classes.NavigationItem}>
    <NavLink
      to={props.link}
      replace={true}
      className={(navData) => (navData.isActive ? Classes.active : "")}
    >
      {props.children}
    </NavLink>
  </li>
);
export default NavigationItem;
