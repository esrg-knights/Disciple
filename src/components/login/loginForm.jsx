import {reduxForm, Field, propTypes} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {FlatButton} from 'material-ui';
import React from "react";

const formSpacing = {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
};

const formStyle = {
    display: 'flex',
    width: '200px',
    flexDirection: 'column'
};
export const LoginForm = props => (
    <div style={formSpacing}>
        <form onSubmit={props.handleSubmit} style={formStyle}>
            <h1 style={{textAlign: 'center'}}>Log in</h1>
            <div>
                <Field
                    name="username"
                    component={TextField}
                    type="text"
                    floatingLabelText="Username"
                    required
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={TextField}
                    type="password"
                    floatingLabelText="Password"
                    errorText={props.failed ? "Have you entered the correct password?" : ""}
                    required
                />
            </div>
            <FlatButton
                label="Login"
                type="submit"
                primary
            />
        </form>
    </div>
);

LoginForm.propTypes = propTypes;

export default reduxForm({
    form: 'login'
})(LoginForm)