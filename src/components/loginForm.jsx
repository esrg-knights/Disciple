import {reduxForm, Field, propTypes} from "redux-form";
import {TextField} from "redux-form-material-ui";
import {FlatButton} from 'material-ui';
import React from "react";

export const LoginForm = props => (
  <form onSubmit={props.handleSubmit}>
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
        required
      />
    </div>
    <FlatButton
      label="Login"
      type="submit"
      primary
    />
  </form>
);

LoginForm.propTypes = propTypes;

export default reduxForm({
  form: 'login'
})(LoginForm)
