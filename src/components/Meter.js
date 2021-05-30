import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMeterType } from '../actions';

function Meter(props) {
  const {
    value,
    text
  } = props
  const dispatch = useDispatch();

  return (
    <div
      value={value}
      onClick={() => dispatch(selectMeterType(value))}
    >{text}</div>
  )
}

export default Meter;
