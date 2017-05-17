import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const BaseCounter = ({ count, onPlusClick, onMinusClick, onSquareClick }) => (
  <div>
    <h5><a href="https://redux.js.org/">Redux</a> &amp; <a href="https://facebook.github.io/react/">React</a> Counter</h5>
    <p>
      <button onClick={onMinusClick}>-</button>
      {count}
      <button onClick={onPlusClick}>+</button>
      <button onClick={onSquareClick}>SQ</button>
    </p>
  </div>
);

BaseCounter.propTypes = {
  count: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return { count: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlusClick: () => dispatch({ type: 'INCREMENT' }),
    onMinusClick: () => dispatch({ type: 'DECREMENT' }),
    onSquareClick: () => dispatch({type:'SQUARE'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseCounter)
