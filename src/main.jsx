import React from "react";
import ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router";
import {Provider} from 'react-redux';
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import routes from "./routes";
import "./main.css";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";

document.write("<div id='root'></div>");

const store = createStore(reducers, applyMiddleware(thunk));

injectTapEventPlugin();
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router
        history={hashHistory}
        routes={routes}
      />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

