import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducers from './slices/productsSlice';
import productReducer from './slices/productSlice';
import userReducer from './slices/userSlice'

const reducer = combineReducers({
    productsState: productsReducers,
    SingleproductState : productReducer,
    userState : userReducer,
});

const store = configureStore({
  reducer,
});

export default store;
