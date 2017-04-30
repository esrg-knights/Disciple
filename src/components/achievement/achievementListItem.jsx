import React from 'react'
import PropTypes from 'prop-types'
import './achievementListItem.css'
import image from './achievement_error.png'

export const AchievementListItem = props => (
  <div className="achievement-list-item">
    <div className="achievement-image-container">
      <img width='100%' height='auto' src={props.achievement.image || image } />
    </div>
    <div className="achievement-description-container">
      <h3>{props.achievement.name}</h3>
      <h4>{props.achievement.description}</h4>
    </div>
  </div>
)

AchievementListItem.propTypes = {
  achievement: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    description:PropTypes.string
  }).isRequired
}
