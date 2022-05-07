import Classes from "./BurgerIng.module.css";
import PropTypes from "prop-types";
import { Component } from "react";
class BurgerIng extends Component {
  render() {
    let ing = null;

    switch (this.props.type) {
      case "bread-bottom":
        ing = <div className={Classes.BreadBottom}></div>;
        break;
      case "bread-top":
        ing = (
          <div className={Classes.BreadTop}>
            <div className={Classes.Seeds1}></div>
            <div className={Classes.Seeds2}></div>
          </div>
        );
        break;
      case "meat":
        ing = <div className={Classes.Meat}></div>;
        break;
      case "cheese":
        ing = <div className={Classes.Cheese}></div>;
        break;
      case "salad":
        ing = <div className={Classes.Salad}></div>;
        break;

      case "bacon":
        ing = <div className={Classes.Bacon}></div>;
        break;
      default:
        ing = null;
    }
    return ing;
  }
}
BurgerIng.propTypes = {
  type: PropTypes.string.isRequired,
};
export default BurgerIng;
