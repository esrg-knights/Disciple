import React from "react";
import {Route, IndexRoute} from 'react-router';
import Overview from './components/overview';

export default(
  <Route path='/'>
    <IndexRoute component={Overview} />
  </Route>
)
