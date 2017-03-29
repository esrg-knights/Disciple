import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import {CircularProgress} from "material-ui";
import {query} from "../../actions/dinner";
import {connect} from "react-redux";
import {DinnerParticipation} from "./dinnerParticipation";

export class Dinner extends React.Component {
  componentDidMount() {
    this.props.query();
  }

  render() {
    return (
      <div>
        {this.props.isFetching ?
          <CircularProgress /> :
          this.props.participations.map((participation, index) =>
            <DinnerParticipation key={index} participation={participation}/>
          )
        }
      </div>
    )
  }
}

Dinner.propTypes = {
  isFetching: PropTypes.bool,
  participations: PropTypes.arrayOf(
    PropTypes.object
  ),
  query: PropTypes.func
};

export function mapStateToProps(state) {
  return state.dinner;
}

export default connect(mapStateToProps, {
  query
})(Dinner);
