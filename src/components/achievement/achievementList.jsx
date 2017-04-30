import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAchievements } from '../../actions/achievement'
import { AchievementListItem } from './achievementListItem'
import { GridList, GridTile } from 'material-ui'
class AchievementList extends React.Component {
  componentDidMount () {
    this.props.getAchievements()
  }

  render () {
    return (
      <div>
        <GridList cols={2}>
          {this.props.achievements.map((achievement, key) =>
            <GridTile><AchievementListItem achievement={achievement}
                                           key={key}/>
            </GridTile>)}
        </GridList>

      </div>
    )
  }
}

AchievementList.propTypes = {
  achievements: PropTypes.array,
  getAchievements: PropTypes.func
}

function mapStateToProps (state) {
  return {
    achievements: state.achievement.achievements
  }
}

export default connect(mapStateToProps, {
  getAchievements
})(AchievementList)
