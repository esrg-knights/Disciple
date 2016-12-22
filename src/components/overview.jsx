import React from "react";
import {AppBar, FlatButton} from "material-ui";
import * as PropTypes from "react/lib/ReactPropTypes";
import {connect} from "react-redux";
import Login from "./login";

export class Overview extends React.Component {
  render() {
    return (
      <div>
        <AppBar
          title="Knights of the kitchen table"
          iconElementRight={
            <FlatButton label={this.props.isLoggedIn ? this.props.username : 'Log in'}/>
          }
        />
        {this.props.isLoggedIn == false ?
          <Login /> :
          <div>
            <p>Logged in status: {this.props.isLoggedIn.toString()}</p>
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}

Overview.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string
};

export function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps)(Overview);
