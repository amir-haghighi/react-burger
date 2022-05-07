const signinReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNED": {
      return true;
    }
    case "notSigned": {
      return false;
    }
    default:
      return state;
  }
};
export default signinReducer;
