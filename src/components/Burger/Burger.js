import Classes from "./Burger.module.css";
import BurgerIng from "./BurgerIng/BurgerIng";
import { useSelector } from "react-redux";
const Burger = () => {
  const ings = useSelector((state) => state.order.ings);
  let transformedIngs = Object.keys(ings)
    .map((ing) => {
      return [...Array(ings[ing])].map((_, index) => (
        <BurgerIng type={ing} key={ing + index} />
      ));
    })
    .reduce((a, b) => {
      return a.concat(b);
    }, []);
  if (transformedIngs.length === 0) {
    transformedIngs = <p>Please start adding your ingridients</p>;
  }
  return (
    <div className={Classes.Burger}>
      <BurgerIng type="bread-top" />
      {transformedIngs}
      <BurgerIng type="bread-bottom" />
    </div>
  );
};

export default Burger;
