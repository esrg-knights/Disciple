import React from "react";
import {AppBar, FlatButton} from "material-ui";
import * as PropTypes from "react/lib/ReactPropTypes";
import {connect} from "react-redux";
import Login from "./login";
import {logout} from "../actions/auth";

export class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <AppBar
          title="Knights of the kitchen table"
          iconElementRight={
            <FlatButton label={this.props.isLoggedIn ? this.props.username : 'Log in' }/>
          }
          onRightIconButtonTouchTap={this.logout}
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
  username: PropTypes.string,
  logout: PropTypes.func
};

export function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps, {
  logout
})(Overview);
