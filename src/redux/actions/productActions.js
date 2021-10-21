import axios from "axios";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = async () => {
  //api call needs to be done here
  const response = await axios.get("/products");

  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: response,
  };
}; 

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODCUTS,
    payload: products,
  };
};

export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
