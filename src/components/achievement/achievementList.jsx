import React from "react";
import {connect} from "react-redux";

import {fetchAll} from '../../actions/achievement';

export class AchievementList extends React.Component {
  componentDidMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <div>
        {this.props.achievements.map((achievement, key) => {
          return <p>{achievement.name}</p>
        })}
      </div>
    )
  }
}

AchievementList.propTypes = {
  achievements: React.PropTypes.array,
  fetchAll: React.PropTypes.func
};

export function mapStateToProps(state) {
  return state.achievement;
}

export default connect(mapStateToProps, {
  fetchAll
})(AchievementList)
