import React from "react";
import {Route, IndexRoute} from 'react-router';
import Overview from './components/overview';
import Dinner from './components/dinner';

export default(
  <Route path='/'>
    <IndexRoute component={Overview}>
      <Route path="dinner" components={Dinner} />
    </IndexRoute>
  </Route>
)
