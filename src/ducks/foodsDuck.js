const CREATE_FOOD = "CREATE_FOOD";
const EDIT_FOOD_BY_ID = "EDIT_FOOD_BY_ID";
const DELETE_FOOD_BY_ID = "DELETE_FOOD_BY_ID";

export const Types = {
  CREATE_FOOD,
  EDIT_FOOD_BY_ID,
  DELETE_FOOD_BY_ID,
};

const initialState = [];

export default function FoodsReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CREATE_FOOD:
      return [...state, action.payload];
    case EDIT_FOOD_BY_ID:
      return state.map((food) => {
        if (food.id === action.payload.id) {
          return { ...food, ...action.payload };
        }
        return food;
      });
    case DELETE_FOOD_BY_ID:
      return [...state.filter((food) => food.id !== action.payload)];
    default:
      return state;
  }
}

export const createFood = (payload) => ({ type: CREATE_FOOD, payload });
export const editFoodById = (payload) => ({ type: EDIT_FOOD_BY_ID, payload });
export const deleteFoodById = (payload) => ({
  type: DELETE_FOOD_BY_ID,
  payload,
});

export const Actions = {
  createFood,
  editFoodById,
  deleteFoodById,
};
