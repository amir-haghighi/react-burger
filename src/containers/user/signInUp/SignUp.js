import { useNavigate } from "react-router";
import MyButton from "../../../components/UI/Button/MyButton";
import Classes from "./SignUp.module.css";
//import axios from "axios";

//import * as actionTypes from "../../../store/actions/actions";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { addEmail, addAddress } from "../../../store/actions/actions";
//const axios = require("axios");
const SingUp = (props) => {
  const dispatch = useDispatch();
  const { email, address } = useSelector((state) => state.user);

  const navigate = useNavigate();
  let newUser = {};
  let lastOrder = {};
  const orderHandler = async () => {
    const lastOrder = props.order;
    const newUser = {
      email: props.email,
      address: props.address,
      orders: [lastOrder],
    };
    console.log(newUser);
    axios
      .post(`http://localhost:5000/users`, newUser)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  //onAddUser()
  //const lastOrder = props.user.order;
  //   const userWithoutOrder = {
  //     email: "",
  //     address: "",
  //     order: {},
  //   };
  // };
  // console.log(props.user);
  // axios
  //   .post("http://localhost:5000/users", props.user)
  //   .then((res) => console.log(res.data));

  const cancelOrderHandler = () => {
    navigate("/");
  };

  return (
    <>
      <div className={Classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form action="">
          <input
            className={Classes.Input}
            type="email"
            name="email"
            value={email}
            onChange={(e) => dispatch(addEmail(e.target.value))}
            placeholder="Your Email"
          />
          <input
            className={Classes.Input}
            type="text"
            name="address"
            value={address}
            onChange={(e) => dispatch(addAddress(e.target.value))}
            placeholder="Your address"
          />
        </form>

        <MyButton type="Success" onClick={orderHandler}>
          Next
        </MyButton>
        <MyButton type="Danger" onClick={cancelOrderHandler}>
          Cancel
        </MyButton>
      </div>
    </>
  );
};

export default SingUp;
