import React from 'react';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { selectExercise } from '../actions'

function SelectOption() {
  const dispatch = useDispatch();
  const options = [
    {
      label: "Lab #1: Three Phase Network",
      options: [
        { label: "Exercise #1: Start connection of three phase power source", value: "1.1" },
        { label: "Exercise #2: Delta connection of three phase power source", value: "1.2" },
        { label: "Exercise #3: Phase sequence in the generator", value: "1.3" },
      ]
    },
    {
      label: "Lab #2: Three Phase Network Underload",
      options: [
        { label: "Exercise #1: Star-connected three-phase source / start-connected resistive load", value: "2.1" },
        { label: "Exercise #2: Star-connected three-phase source / delta-connected resistive load", value: "2.2" },
        { label: "Exercise #3: Delta-connected three-phase source / start-connected resistive load", value: "2.3" },
        { label: "Exercise #4: Delta-connected three-phase source / delta-connected resistive load", value: "2.4" }
      ]
    },
    {
      label: "Lab #3: Condition of Symmetry and Balance",
      options: [
        { label: "Exercise #1: Connecting an unbalanced resistive load", value: "3.1" },
        { label: "Exercise #2: Connection with three-phase and single-phase loads", value: "3.2" }
      ]
    },
    {
      label: "Lab #4: Capacitive and Inductive Loads",
      options: [
        { label: "Exercise #1: Connection of three-phase inductive load", value: "4.1" },
        { label: "Exercise #2: Test points of the oscilloscope", value: "4.2" },
        { label: "Exercise #3: Connection of the three-phase R-L-C load", value: "4.3" },
        { label: "Exercise #4: Test points of the oscilloscope in the delta connection", value: "4.4" }
      ]
    }
  ]

  return (
    <Select
      options={options}
      onChange={(e) => dispatch(selectExercise(e.value))}
      defaultValue={options[0]}
    />
  )
}

export default SelectOption