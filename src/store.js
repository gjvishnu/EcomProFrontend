import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducers from './slices/productsSlice';
import productReducer from './slices/productSlice'

const reducer = combineReducers({
    productsState: productsReducers,
    SingleproductState : productReducer
});

const store = configureStore({
  reducer,
});

export default store;
