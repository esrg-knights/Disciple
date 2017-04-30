import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { AchievementListItem } from './achievementListItem'
import Username from '../extra/username'
import {getAchievementGets} from '../../actions/achievement'

class AchievementPage extends React.Component {
  componentDidMount(){
    this.props.getAchievementGets(this.props.achievement.id)
  }

  render () {
    return (
      <div>
        <AchievementListItem achievement={this.props.achievement}/>
        <h3>Gehaald door</h3>
        <ul>
          {this.props.achievementGets.map((achievementGet, key) => <li><Username userId={achievementGet.user}/></li>)}
        </ul>
      </div>
    )
  }
}

AchievementPage.propTypes = {
  achievement: PropTypes.shape({}).isRequired,
  achievementGets: PropTypes.array,
  getAchievementGets: PropTypes.func
}


function mapStateToProps (state, ownProps) {
  return {
    achievement: ownProps.achievement,
    achievementGets: state.achievement.achievementGets
  }
}

export default connect(mapStateToProps, {
  getAchievementGets
})(AchievementPage)
