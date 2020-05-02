const CREATE_FOOD = "CREATE_FOOD";
const GET_FOODS = "GET_FOODS";
const GET_FOOD_BY_ID = "GET_FOOD_BY_ID";
const EDIT_FOOD_BY_ID = "EDIT_FOOD_BY_ID";

export const Types = {
  CREATE_FOOD,
  GET_FOODS,
  GET_FOOD_BY_ID,
  EDIT_FOOD_BY_ID,
};

const initialState = [];

export default function FoodsReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CREATE_FOOD:
      const id = Date.now();
      return [...state, { ...action.payload, id }];
    case GET_FOODS:
      return state;
    case GET_FOOD_BY_ID:
      return;
    case EDIT_FOOD_BY_ID:
      return [
        ...state.filter((food) => food.id !== action.payload.id),
        action.payload,
      ];
    default:
      return state;
  }
}

export const createFood = (payload) => ({ type: CREATE_FOOD, payload });
export const getFoods = (payload) => ({ type: GET_FOODS, payload });
export const getFoodById = (payload) => ({ type: GET_FOOD_BY_ID, payload });
export const editFoodById = (payload) => ({ type: EDIT_FOOD_BY_ID, payload });

export const Actions = {
  createFood,
  getFoods,
  getFoodById,
  editFoodById,
};
