import { useNavigate } from "react-router";
import MyButton from "../../../components/UI/Button/MyButton";
import Classes from "./SignUp.module.css";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmail, addAddress } from "../../../store/actions/actions";
//import * as actionTypes from "../../../store/actions/actions";
const SignIn = (props) => {
  const dispatch = useDispatch();
  const { email, address } = useSelector((state) => state.user);
  const [emailState, setEmailState] = useState("");
  const navigate = useNavigate();
  const orderHandler = () => {
    axios
      .post(`http://localhost:5000/users/signin`, emailState)
      .then((res) => {
        console.log(res.data.message);
        setEmailState(res.data.user);
      })
      .catch((err) => console.log(err));
  };
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
        </form>

        <MyButton type="Success" onClick={orderHandler}>
          next
        </MyButton>
        <MyButton type="Danger" onClick={cancelOrderHandler}>
          Cancel
        </MyButton>
      </div>
    </>
  );
};

export default SignIn;
