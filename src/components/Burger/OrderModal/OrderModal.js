import { Component } from "react";
import MyButton from "../../UI/Button/MyButton";

class OrderModal extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("Order summary did update");
  // }
  render() {
    const ingsList = Object.entries(this.props.ings).map((ing) => {
      return (
        <li key={ing[0] + ing[1]}>
          <span style={{ textTransform: "capitalize" }}>{ing[0]}</span> :{" "}
          {ing[1]}
        </li>
      );
    });
    return (
      <>
        <h3>Your Order </h3>
        <p>A delicious burger with the following ings : </p>
        <ul>{ingsList}</ul>
        <p>
          <strong>Total Price : {this.props.totalPrice}</strong>
        </p>
        <p>continue to checkout ?</p>
        <MyButton type="Danger" onClick={this.props.close}>
          CANCEL
        </MyButton>
        <MyButton type="Success" onClick={this.props.continue}>
          CONTINUE
        </MyButton>
      </>
    );
  }
}
export default OrderModal;
