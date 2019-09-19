import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../store';

const Footer = props => (
  <div className="footer">
    <div>
      <button type="button" onClick={() => props.visibilityFilter('SHOW_ALL')}>
        All
      </button>
      <button
        type="button"
        onClick={() => props.visibilityFilter('SHOW_ACTIVE')}
      >
        Active
      </button>
      <button
        type="button"
        onClick={() => props.visibilityFilter('SHOW_BOUGHT')}
      >
        Bought
      </button>
    </div>
  </div>
);

const mapDispatch = dispatch => {
  return {
    visibilityFilter: filterType => {
      return dispatch(setVisibilityFilter(filterType));
    },
  };
};

export default connect(
  null,
  mapDispatch
)(Footer);
