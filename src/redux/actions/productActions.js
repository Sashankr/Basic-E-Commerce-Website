import { ActionTypes } from "../constants/action-types";
import eCommerceApi from '../../apis/eCommerceApi'

export const fetchProducts = () => async (dispatch) => {
  //api call needs to be done here
    const response = await eCommerceApi.get("/products");

    dispatch({
      type: ActionTypes.FETCH_PRODUCTS,
      payload: response.data,      
    })
};

export const fetchProduct = (id) => async (dispatch) => {
  //api call needs to be done here
    const response = await eCommerceApi.get(`/products/${id}`);

    dispatch({
      type: ActionTypes.SELECTED_PRODCUTS,
      payload: response.data,      
    })
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
