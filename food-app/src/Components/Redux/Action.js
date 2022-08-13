import axios from "axios";
import { FoodProd } from "./ActionType";

const SetProd = (prods) => {
  return {
    type: FoodProd.SET_PROD,
    payload: prods,
  };
};

const SelectedProd = (prod) => {
  return {
    type: FoodProd.SELECTED_PROD,
    payload: prod,
  };
};

export const getProd = () => (dispatch) => {
  try {
    axios.get("http://localhost:8080/fooddata").then((res) => {
      dispatch(SetProd(res.data));
    });
  } catch (error) {
    console.log("err", error);
  }
};


export const selectedProd = (code) => (dispatch) => {
  try {
    axios.get(`http://localhost:8080/fooddata/${code}`).then((res) => {
      dispatch(SelectedProd(res.data));
    });
  } catch (error) {
    console.log("err", error);
  }
};
