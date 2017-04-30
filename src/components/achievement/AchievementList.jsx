import React from 'react'
import PropTypes from 'prop-types'
import { GridList, GridTile } from 'material-ui'
import { AchievementListItem } from './achievementListItem'

export const AchievementList = props => (
  <GridList cols={2}>
    {props.achievements.map((achievement, key) =>
      <GridTile><AchievementListItem achievement={achievement}
                                     key={key}/>
      </GridTile>)}
  </GridList>
)

AchievementList.propTypes = {
  achievements: PropTypes.array

}
