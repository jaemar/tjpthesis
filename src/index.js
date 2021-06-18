import React, { Component } from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';

import "./styles.css";
import Map from "./components/Board"
import allReducers from "./reducers";
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const TITLE = 'BLP Trainer'

//var links = [{ s: 0, d: 1 }, { s: 1, d: 2 }, { s: 2, d: 3 }, { s: 3, d: 4 }];

class App extends Component {
  componentDidMount(){
    document.title = TITLE
  }

  render() {
    return (
      <div className="App">
        <Map width={666} height={1340} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
rootElement);
