import { 
  SELECT_NODE, 
  SELECT_LINE, 
  SELECT_CONNECTION_TYPE,
  POWER_TOGGLE,
  SELECT_METER_TYPE,
  SELECT_EXERCISE,
  JUMPER_TOGGLE
} from '../constants/action-types.js'

export const selectNode = (nodeId) => {
  return {
    type: SELECT_NODE,
    payload: nodeId
  }
}

export const jumperToggle = (jumperId) => {
  return {
    type: JUMPER_TOGGLE,
    payload: jumperId
  }
}

export const selectLine = (lineId) => {
  return {
    type: SELECT_LINE,
    payload: lineId
  }
}

export const selectConnectionType = (connectionType) => {
  return {
    type: SELECT_CONNECTION_TYPE,
    payload: connectionType
  }
}

export const powerToggle = (status) => {
  return {
    type: POWER_TOGGLE,
    payload: status
  }
}

export const selectMeterType = (meterType) => {
  return {
    type: SELECT_METER_TYPE,
    payload: meterType
  }
}

export const selectExercise = (exercise) => {
  return {
    type: SELECT_EXERCISE,
    payload: exercise
  }
}
