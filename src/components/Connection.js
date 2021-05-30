import React from 'react';
import { useDispatch } from 'react-redux';
import { selectConnectionType } from '../actions';

function Connection(props) {
  const {
    value,
    text
  } = props
  const dispatch = useDispatch();

  return (
    <div
      value={value}
      onClick={() => dispatch(selectConnectionType(value))}
    >{text}</div>
  )
}

export default Connection;
