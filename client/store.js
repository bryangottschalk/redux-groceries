import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const ADD_GROCERY = 'ADD_GROCERY';
const TOGGLE_GROCERY = 'TOGGLE_GROCERY';

let nextId = 0;
export const addGrocery = text => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
});

export const toggleGrocery = groceryId => ({
  type: TOGGLE_GROCERY,
  id: groceryId,
});

const initialState = { groceries: [] };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
      };
      return { ...state, groceries: [...state.groceries, newGrocery] };
    case TOGGLE_GROCERY:
      const groceries = state.groceries.map(grocery => {
        if (grocery.id === action.id) {
          return { ...grocery, bought: !grocery.bought };
        } else {
          return grocery;
        }
      });
      return { ...state, groceries };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
