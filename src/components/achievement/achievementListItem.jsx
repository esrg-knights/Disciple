import React from 'react'
import PropTypes from 'prop-types'
import './achievementListItem.css'
import image from './achievement_error.png'
import AchievementPage from './achievementPage'
import { Dialog } from 'material-ui'

export class AchievementListItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {open: false}
    this.open = () => this.setState({open: true})
    this.close = () => this.setState({open: false})
  }

  render () {
    return (
      <div className="achievement-list-item">
        <div className="achievement-image-container" onTouchTap={this.open}>
          <img width='100%' height='auto' src={this.props.achievement.image || image }/>
        </div>
        <div className="achievement-description-container">
          <h3>{this.props.achievement.name}</h3>
          <h4>{this.props.achievement.description}</h4>
        </div>

        <Dialog onRequestClose={this.close}
                open={this.state.open}>
          <AchievementPage achievement={this.props.achievement}/>
        </Dialog>
      </div>
    )
  }

}

AchievementListItem.propTypes = {
  achievement: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string
  }).isRequired
}
