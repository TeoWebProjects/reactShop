import axios from "axios"
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants"

export const addToCart = (id) => async (dispatch, getState) => {
  let url = ""

  if (process.env.NODE_ENV === "production") {
    url = `https://teoshopapi.herokuapp.com/api/products/${id}`
  } else {
    url = `http://localhost:5000/api/products/${id}`
  }
  const { data } = await axios.get(url)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      discountPrice: data.discountPrice,
      countInStock: data.countInStock,
    },
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}
