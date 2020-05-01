import { combineReducers } from "redux";
import FooodsReducer from "./foodsDuck";

const rootReducer = combineReducers({
  foodStore: FooodsReducer,
});

export default rootReducer;
