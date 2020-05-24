import { createStore } from "redux";
import rootReducer from "./rootReducer";

const saveToStorage = (state) => {
  const data = JSON.stringify(state);
  localStorage.setItem("state", data);
};

const loadFromStorage = () => {
  try {
    let state = JSON.parse(localStorage.getItem("state"));
    if (state == null) return undefined;
    return state;
  } catch (e) {
    return undefined;
  }
};
const store = createStore(rootReducer, loadFromStorage());

store.subscribe(() => {
  saveToStorage(store.getState());
});

export default store;
