import React from "react";
import {login} from "../../actions/auth";
import LoginForm from "./loginForm";
import * as PropTypes from "react/lib/ReactPropTypes";
import {Snackbar} from 'material-ui';
import {connect} from "react-redux";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(credentials) {
    this.props.login(credentials);
  }

  render() {
    return (
      <div>
        <LoginForm onSubmit={this.submit}/>
        <Snackbar
          open={this.props.isFailed}
          message="Failed to log in"
          autoHideDuration={5000}
        />
      </div>
    )
  }
}

Login.propTypes = {
  isFailed: PropTypes.bool,
  login: PropTypes.func
};

export function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps, {
  login: login
})(Login)
