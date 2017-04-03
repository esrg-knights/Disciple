import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import {CircularProgress, GridList, GridTile} from "material-ui";
import {query} from "../../actions/dinner";
import {connect} from "react-redux";
import DinnerParticipation from "./dinnerParticipation";

export class Dinner extends React.Component {
  componentDidMount() {
    this.props.query();
  }

  render() {
    return (
      <div>
        {this.props.isFetching ?
          <CircularProgress /> :
          <GridList
            cols={6}>
            {this.props.participations.map((participation, index) =>
              <GridTile key={index}>
                <DinnerParticipation key={index} participation={participation}/>
              </GridTile>
            )
            }
          </GridList>

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
