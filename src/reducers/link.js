import { SELECT_NODE } from '../constants/action-types.js'
const initialState = []

const linksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_NODE:
      if (state.includes(action.payload)) {
        const index = state.indexOf(action.payload)
        const newState = [...state]
        newState.length = index
        return [...newState] 
      }
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default linksReducer;
