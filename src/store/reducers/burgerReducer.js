const initialState = {
  ings: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  price: 4,
};
const ING_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 1.7,
};
const burgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ING": {
      return {
        ...state,
        ings: {
          ...state.ings,
          [action.ingName]: +state.ings[action.ingName] + 1,
        },
        price: +(+state.price + +ING_PRICES[action.ingName]).toFixed(2),
      };
    }
    case "REMOVE_ING": {
      return {
        ...state,
        ings: {
          ...state.ings,
          [action.ingName]: +state.ings[action.ingName] - 1,
        },
        price: +(+state.price - +ING_PRICES[action.ingName]).toFixed(2),
      };
    }
    // case actionTypes.ADD_USER: {
    //   return {
    //     ...state,
    //     email: action.email,
    //     address: action.address,
    //   };
    // }
    default:
      return state;
  }
};
export default burgerReducer;
