import { useEffect, useState } from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderModal from "../../components/Burger/OrderModal/OrderModal";
import Modal from "../../components/UI/Modal/Modal";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const BurgerBuilder = (props) => {
  const ings = useSelector((state) => state.order.ings);
  const totalPrice = useSelector((state) => state.order.price);

  const [purchasableState, setPurchasableState] = useState(false);
  const [purchasingState, setPurchasingState] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    const updatePurchaseState = () => {
      const sum = +Object.values({ ...ings }).reduce((a, b) => a + b, 0);

      setPurchasableState(sum > 0);
    };
    updatePurchaseState();
  }, [ings]);

  const purchasingHandler = () => {
    setPurchasingState(true);
  };
  const purchaseCancelHandler = () => {
    setPurchasingState(false);
  };

  const purchaseContinueHandler = () => {
    navigate("users");
  };

  const disabledIng = { ...ings };
  for (let key in disabledIng) {
    disabledIng[key] = disabledIng[key] <= 0;
  }

  return (
    <>
      <Modal show={purchasingState} close={purchaseCancelHandler}>
        <OrderModal
          ings={ings}
          close={purchaseCancelHandler}
          continue={purchaseContinueHandler}
          totalPrice={totalPrice}
        />
      </Modal>
      <Burger />
      <BuildControls
        totalPrice={totalPrice}
        addIng={props.addIng}
        removeIng={props.removeIng}
        disabled={disabledIng}
        ings={ings}
        purchasable={purchasableState}
        onOrderClick={purchasingHandler}
      />
    </>
  );
};

export default BurgerBuilder;
