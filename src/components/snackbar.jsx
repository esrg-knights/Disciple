import React from 'react';
import {PropTypes} from 'react';
import {Snackbar} from 'material-ui';
import {closeSnackbar} from '../actions/snackbar';
import {connect} from "react-redux";

export class SnackbarWrapper extends React.Component {
    render() {
        return (
            <div>
                <Snackbar
                    open={this.props.open}
                    message={this.props.last.text}
                    autoHideDuration={this.props.last.timeout}
                    action={this.props.last.actionName}
                    onActionTouchTap={this.props.last.action}
                    onRequestClose={this.props.closeSnackbar}
                />
            </div>
        )
    }
}

SnackbarWrapper.propTypes = {
    last: React.PropTypes.object,
    open: PropTypes.bool,
    lastChange: PropTypes.number,
    closeSnackbar: PropTypes.func
};

export function mapStateToProps(state) {
    return state.snackbar;
}

export default connect(mapStateToProps, {
    closeSnackbar
})(SnackbarWrapper);