import React from 'react';
import { useDispatch } from 'react-redux';
import { powerToggle } from '../actions';

function PowerToggle() {
  const dispatch = useDispatch();

  return (
    <label className="switch">
      <input type="checkbox" onChange={(e) => dispatch(powerToggle(e.target.checked))} />
      <span className="slider"></span>
    </label>
  )
}

export default PowerToggle
