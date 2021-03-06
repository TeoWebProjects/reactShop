import axios from "axios"
import { CART_CLEAR_ITEMS } from "../constants/cartConstants"
import { ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAIL } from "../constants/orderConstants"

export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    }

    let url = ""
    if (process.env.NODE_ENV === "production") {
      url = `https://teoshopapi.herokuapp.com/api/orders`
    } else {
      url = `http://localhost:5000/api/orders`
    }

    const { data } = await axios.post(url, order, config)

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    })
    dispatch({
      type: CART_CLEAR_ITEMS,
      payload: data,
    })
    localStorage.removeItem("cartItems")
  } catch (error) {
    const message = "dsdas"
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    })
  }
}
