import axios from "axios";
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


const createAction = (type, payload) => {
  return { type, payload };
};
//

export const getRestaurants = (curr, sort, cat) => async (dispatch) => {
  if (cat === "") {
    try {
      dispatch({ type: GET_RESTAURANTS_REQUEST });
      var res = await axios.get(
        `https://graceful-moth-scarf.cyclic.app/product?page=${curr}&limit=9&sort=price&order=${sort}`
      );
      console.log(res)
      dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: res.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_RESTAURANTS_FAILURE, payload: error });
    }
  } else {
    try {
      dispatch({ type: GET_RESTAURANTS_REQUEST });
      var res1 = await axios.get(
        `${process.env.REACT_APP_PORT}/product?page=${curr}&limit=9&sort=price&order=${sort}&category=${cat}`
      );
      dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: res1.data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_RESTAURANTS_FAILURE, payload: error });
    }
  }
};

export const getSingleRestaurant = (id) => async (dispatch) => {
  try {
   
    dispatch({ type: GET_SINGLE_RESTAURANT_REQUEST });
    var Api = await axios.get(`${process.env.REACT_APP_PORT}/product/single/${id}`);
    console.log(Api.data);
    dispatch({ type: GET_SINGLE_RESTAURANT_SUCCESS, payload: Api.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_SINGLE_RESTAURANT_FAILURE, payload: error });
  }
};

export const AddingTocrat = (id) => async (dispatch) => {
  const token=localStorage.getItem('token');
  const header={
    Authorization:token
  }
  try {
    var ress = await axios.get(`${process.env.REACT_APP_PORT}/product/${id}`);
    const cart=await axios.post(`${process.env.REACT_APP_PORT}/cart`,ress.data[0],{
      headers:header
    });
    console.log("cart",ress.data)
    console.log("cart2",cart.data)
    dispatch({ type: ADD_TO_CART, payload: ress.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_SINGLE_RESTAURANT_FAILURE, payload: error });
  }
};

export const getFromCart=async (dispatch)=>{
  try {
    const token=localStorage.getItem('token');
    const header={
      Authorization:token
    }
    const cart=await axios.get(`${process.env.REACT_APP_PORT}/cart`,{
      headers:header
    });
  dispatch({type:GET_CART,payload:cart.data})
  } catch (error) {
    console.log(error);
  }
}

export const removeCart = (id)=>async (dispatch) => {
  try {
    const token=localStorage.getItem('token');
    const header={
      Authorization:token
    }
    const cart=await axios.delete(`${process.env.REACT_APP_PORT}/cart/${id}`,{
      headers:header
    });
  dispatch(getFromCart);
  } catch (error) {
    console.log(error);
  }
};

export const emptyCart = (dispatch) => {
  dispatch({ type: EMPTY_CART });
};

export const signups=(data)=>async (dispacth)=>{
  try {
    await axios.post(`${process.env.REACT_APP_PORT}/user/signup`,data);
  } catch (error) {
    console.log(error)
  }
}

export const logout = (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT });
};


export const login =(dataa)=> async (dispatch) => {
try {
 const res= await axios.post(`${process.env.REACT_APP_PORT}/user/login`,dataa);
 console.log(res)
  localStorage.setItem('token',res.data);
  console.log(res.data)
  dispatch({ type: LOGIN });
 
} catch (error) {
  console.log(error)
}
};
