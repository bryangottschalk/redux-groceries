import React from 'react';
import GroceryItem from './GroceryItem';
import { connect } from 'react-redux';
import { toggleGrocery } from '../store';

const GroceryList = props => (
  <ul>
    {props.groceries.map(grocery => (
      <GroceryItem
        key={grocery.id}
        {...grocery}
        onClick={() => props.toggleGrocery(grocery.id)}
      />
    ))}
  </ul>
);

const mapState = state => ({
  groceries: state.groceries.filter(grocery => {
    if (state.visibilityFilter === 'SHOW_BOUGHT') {
      return grocery.bought === true;
    } else if (state.visibilityFilter === 'SHOW_ACTIVE') {
      return grocery.bought === false;
    } else {
      return grocery;
    }
  }),
});

const mapDispatch = dispatch => {
  return {
    toggleGrocery: groceryId => {
      dispatch(toggleGrocery(groceryId));
    },
  };
};
export default connect(
  mapState,
  mapDispatch
)(GroceryList);
