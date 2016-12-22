import React from "react";
import {Route, IndexRoute} from 'react-router';
import Overview from './components/overview';
import Dinner from './components/dinner';

export default(
  <Route path='/' component={Overview}>
    <Route path="dinner" component={Dinner} />
  </Route>
)
