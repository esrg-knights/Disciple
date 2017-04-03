import React from "react";
import LoginForm from "./loginForm";
import {PropTypes} from "react";
import {connect} from "react-redux";
import {login} from "../../actions/auth";

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
            <LoginForm onSubmit={this.submit} failed={this.props.isFailed}/>
        )
    }
}

Login.propTypes = {
    isFailed: PropTypes.bool,
    login: PropTypes.func
};

export function mapStateToProps(state){
    return state.auth;
}

export default connect(mapStateToProps, {
    login
})(Login);
