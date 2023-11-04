import React from "react";
import {
  ADD_TO_CART,
  EMPTY_CART,
  GET_CART,
  GET_RESTAURANTS_FAILURE,
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_SINGLE_RESTAURANT_FAILURE,
  GET_SINGLE_RESTAURANT_REQUEST,
  GET_SINGLE_RESTAURANT_SUCCESS,
  LOGIN,
  LOGOUT,
  REMOVE_FROM_CART,
} from "./ActionType";
const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  products: [],
  single: {},
  cart: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RESTAURANTS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_RESTAURANTS_SUCCESS:
      return { ...state, isLoading: false, isError: false, products: payload };
    case GET_RESTAURANTS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_SINGLE_RESTAURANT_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case GET_SINGLE_RESTAURANT_SUCCESS:
      return { ...state, isLoading: false, isError: false, single: payload };
    case GET_SINGLE_RESTAURANT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: [...payload],
      };
     case GET_CART:
      return {...state,cart :payload} 
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
      };
    case LOGIN:
      return {
        ...state,
        isAuth: true,
      };
    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};

export default reducer;
