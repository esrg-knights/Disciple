import React from 'react'
import { AppBar, FlatButton } from 'material-ui'
import * as PropTypes from 'react/lib/ReactPropTypes'
import { connect } from 'react-redux'
import Login from './login/login'
import { logout, refresh } from '../actions/auth'
import SnackbarWrapper from './snackbar'

const contentStyle = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'center',
}

const contentInner = {
  width: '960px',
  flexDirection: 'column',
}

export class Overview extends React.Component {
    render () {
    return (
      <div>
        <SnackbarWrapper />
        <AppBar
          title="Knights of the kitchen table"
          iconElementRight={
            <FlatButton label={this.props.isLoggedIn ? this.props.username : 'Log in' }/>
          }
          onRightIconButtonTouchTap={() => this.props.logout()}
        />
        <div style={contentStyle}>
          <div style={contentInner}>
            {this.props.isLoggedIn === false ? <Login /> : <div>
              {this.props.children}
            </div>
            }
          </div>
        </div>

      </div>
    )
  }
}

Overview.propTypes = {
  isLoggedIn: PropTypes.bool,
  username: PropTypes.string,
  logout: PropTypes.func,
  refresh: PropTypes.func
}

export function mapStateToProps (state) {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    username: state.auth.username
  }
}

export default connect(mapStateToProps, {
  logout,
  refresh
})(Overview)
