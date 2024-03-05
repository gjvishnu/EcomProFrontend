import axios from "axios";
import {
  productFail,
  productsRequest,
  productsSuccess,
} from "../slices/productsSlice";

export const getProducts = () => async (dispatch) => {
  try {
    const url = "/api/products";
    dispatch(productsRequest());
    const { data } = await axios.get(url);
    dispatch(productsSuccess(data));
  } catch (e) {
    dispatch(productFail(e.response.data.message));
  }
};
