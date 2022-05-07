import Classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = () => (
  <nav className={Classes.Nav}>
    <ul className={Classes.NavigationItems}>
      <NavigationItem link="/">Burger Builder</NavigationItem>
      <NavigationItem link="users">user</NavigationItem>
    </ul>
  </nav>
);
export default NavigationItems;
