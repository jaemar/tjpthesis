import nodesReducer from './nodes.js'
//import linksReducer from './link.js'
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    nodes: nodesReducer,
});

export default allReducers;
