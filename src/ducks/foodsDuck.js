const CREATE_FOOD = "CREATE_FOOD";

export const Types = {
  CREATE_FOOD,
};

const initialState = [];

export default function FoodsReducer(state = initialState, action) {
  if (!action) return state;

  switch (action.type) {
    case CREATE_FOOD:
      const id = Date.now();
      return [...state, { ...action.payload, id }];
    default:
      return state;
  }
}

export const createFood = (payload) => ({ type: CREATE_FOOD, payload });

export const Actions = {
  createFood,
};
