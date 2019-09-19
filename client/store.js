import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

const ADD_GROCERY = 'ADD_GROCERY';

let nextId = 0;
export const addGrocery = text => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
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
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;
