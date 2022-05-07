// import * as actionTypes from "../actions/actions";

const initialState = {
  email: "",
  address: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_EMAIL": {
      return {
        ...state,
        email: action.email,
      };
    }
    case "ADD_ADDRESS": {
      return { ...state, address: action.address };
    }
    default:
      return state;
  }
};
export default userReducer;
