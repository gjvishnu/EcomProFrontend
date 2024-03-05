import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsReducers from './slices/productsSlice';

const reducer = combineReducers({
    productsState: productsReducers
});

const store = configureStore({
  reducer,
});

export default store;
