import { combineReducers } from "redux";
import { productsReducer, selectedProdReducer } from "./Reducer";

export const Reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProdReducer,
});
