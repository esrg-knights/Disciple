import React from 'react'
import { IndexRoute, Route } from 'react-router'
import Overview from './components/overview'
import Dinner from './components/dinner/diningList'
import AchievementList from './components/achievement/achievementList'

export default(
  <Route path='/' component={Overview}>
    <IndexRoute component={Dinner}/>
    <Route path='achievements' components={AchievementList} />
  </Route>
)
