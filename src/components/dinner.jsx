import React from "react";
import * as PropTypes from "react/lib/ReactPropTypes";
import {query} from "../actions/dinner";
import {connect} from "react-redux";

export class Dinner extends React.Component {
  componentDidMount() {
    this.props.query();
  }

  render() {
    return (
      <div>
        {this.props.isFetching ?
          <h1>Fetching</h1> :
          <p>fetched</p>
        }
      </div>
    )
  }
}

Dinner.propTypes = {
  isFetching: PropTypes.bool,
  dinnerlist: PropTypes.array(
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
