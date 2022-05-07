import Classes from "./BuildControls.module.css";
import Controler from "./Controler/Controler";

import { useSelector, useDispatch } from "react-redux";
import { addIng, removeIng } from "../../../store/actions/actions";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];
const BuildControls = (props) => {
  const dispatch = useDispatch();
  const ings = useSelector((state) => state.order.ings);
  return (
    <div className={Classes.BuildControls}>
      <p>
        Current Price : <strong>{props.totalPrice.toFixed(2)} $</strong>
      </p>
      {controls.map((ctrl) => (
        <Controler
          key={ctrl.label}
          label={ctrl.label}
          add={() => dispatch(addIng(ctrl.type))}
          remove={() => dispatch(removeIng(ctrl.type))}
          disabled={props.disabled[ctrl.type]}
          ingNumber={ings[ctrl.type]}
        />
      ))}
      <button
        className={Classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.onOrderClick}
      >
        ORDER NOW
      </button>
    </div>
  );
};
export default BuildControls;
