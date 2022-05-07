import { useSelector } from "react-redux";
import { Link, NavLink, Outlet } from "react-router-dom";
import Burger from "../../../components/Burger/Burger";
import Classes from "./SignInUp.module.css";

const SignInUp = (props) => {
  const totalPrice = useSelector((state) => state.order.price);

  return (
    <div className={Classes.Center}>
      <div className={Classes.Signs}>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? Classes.Active : Classes.NotActive
          }
          end
        >
          Sign up
        </NavLink>
        <NavLink
          to="/users/signin"
          className={(navData) =>
            navData.isActive ? Classes.Active : Classes.NotActive
          }
        >
          Sign in
        </NavLink>
      </div>
      <Outlet />
      <h3 className={Classes.Center}>Total Price : {totalPrice} </h3>
      <Burger />
    </div>
  );
};

export default SignInUp;
