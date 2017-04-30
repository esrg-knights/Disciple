import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAchievements } from '../../actions/achievement'
import { AchievementList } from './AchievementList'

class AchievementListRedux extends React.Component {
  componentDidMount () {
    this.props.getAchievements()
  }

  render () {
    return (
      <AchievementList achievements={this.props.achievements}/>
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
})(AchievementListRedux)
