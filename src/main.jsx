import React from "react";
import ReactDOM from "react-dom";
import {Router, hashHistory} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import routes from "./routes";
import './main.css';

document.write("<div id='root'></div>");

injectTapEventPlugin();
ReactDOM.render(
  <MuiThemeProvider>
    <Router
      history={hashHistory}
      routes={routes}
    />
  </MuiThemeProvider>,
  document.getElementById('root')
);

