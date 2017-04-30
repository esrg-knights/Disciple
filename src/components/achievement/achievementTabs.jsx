import React from 'react'
import PropTypes from 'prop-types'
import { Tab, Tabs } from 'material-ui'
import { getAchievements } from '../../actions/achievement'
import { connect } from 'react-redux'
import { AchievementList } from './AchievementList'

class AchievementTabs extends React.Component {
  constructor (props) {
    super(props)

    this.state = {categories: []}
  }

  componentDidMount () {
    this.props.getAchievements()
      .then(() => this.props.achievements.map((item) => this.state.categories.includes(item.category) ? 'none' : this.setState({
        categories: this.state.categories.concat([item.category])
      })))
  }

  render () {
    return (
      <Tabs>
        {this.state.categories.map((category, key) =>
          <Tab label={category}>
            <AchievementList achievements={this.props.achievementsgaa.filter(item => item.category === category)}/>
          </Tab>
        )}
      </Tabs>
    )
  }
}

AchievementTabs.propTypes = {
  achievements: PropTypes.array,
  getAchievements: PropTypes.func
}

function mapStateToProps (state) {
  return {
    achievements: state.achievement.achievements
  }
}

export default connect(mapStateToProps, {getAchievements})(AchievementTabs)
