import axios from "axios"
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants"

export const listProducts =
  (id = "") =>
  async (dispatch) => {
    try {
      let url = ""
      dispatch({ type: PRODUCT_LIST_REQUEST })
      // const { data } = await axios.get(`http://localhost:5000/api/products/category/${id}`)
      if (process.env.NODE_ENV === "production") {
        url = `https://teoshopapi.herokuapp.com/api/products/category/${id}`
      } else {
        url = `http://localhost:5000/api/products/category/${id}`
      }
      const { data } = await axios.get(url)
      dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error,
      })
    }
  }

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    let url = ""
    if (process.env.NODE_ENV === "production") {
      url = `https://teoshopapi.herokuapp.com/api/products/${id}`
    } else {
      url = `http://localhost:5000/api/products/${id}`
    }

    const product = await axios.get(url)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: product.data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error,
    })
  }
}
