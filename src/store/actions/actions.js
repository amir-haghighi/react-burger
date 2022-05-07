// export const ADD_INGS = "ADD_INGS";
// export const REMOVE_INGS = "REMOVE_INGS";
// export const ADD_USER = "ADD_USER";

export const addIng = (ing) => {
  return {
    type: "ADD_ING",
    ingName: ing,
  };
};
export const removeIng = (ing) => {
  return {
    type: "REMOVE_ING",
    ingName: ing,
  };
};
export const addEmail = (email) => {
  return {
    type: "ADD_EMAIL",
    email: email,
  };
};
export const addAddress = (address) => {
  return {
    type: "ADD_ADDRESS",
    address: address,
  };
};
export const signin = () => {
  return {
    type: "SIGNED",
  };
};
export const signout = () => {
  return {
    type: "notSigned",
  };
};
