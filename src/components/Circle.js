import React from 'react';
import { useDispatch } from 'react-redux';

function Circle(props) {
  const {
    nodeId,
    cx,
    cy,
    id,
    isSelected,
    action,
    r
  } = props
  const dispatch = useDispatch();

  return (
    <circle
      id={id}
      cx={cx}
      cy={cy}
      r={r}
      fill={isSelected ? "#fff" : "#000"}
      stroke="#fff"
      strokeWidth="2"
      onClick={() => dispatch(action(nodeId))}
    />
  )
}

export default Circle;
