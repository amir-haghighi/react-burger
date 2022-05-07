import Burger from "../../Burger/Burger";
import MyButton from "../../UI/Button/MyButton";
import Classes from "./CheckoutSummary.module.css";
const CheckoutSummary = (props) => {
  return (
    <div className={Classes.CheckoutSummary}>
      <h1>We hope it tastes well !</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ings={props.ings} />
      </div>
      {props.showBtns ? (
        <>
          <MyButton type="Danger" onClick={props.checkoutCancelled}>
            CANCEL
          </MyButton>
          <MyButton type="Success" onClick={props.checkoutContinued}>
            CONTINUE
          </MyButton>
        </>
      ) : null}
    </div>
  );
};
export default CheckoutSummary;
