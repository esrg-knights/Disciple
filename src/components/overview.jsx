import React from 'react';
import {AppBar, FlatButton, Menu, MenuItem, Popover, Divider} from 'material-ui';
import * as PropTypes from 'react/lib/ReactPropTypes';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';
import Login from './login/login';
import {logout, refresh} from '../actions/auth';
import SnackbarWrapper from './snackbar';

export class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.navigate = this.navigate.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    setInterval(this.props.refresh(), 200000)
  }

  toggleMenu() {
    if(this.props.isLoggedIn) {
      this.setState({
        menu: !this.state.menu
      })
    }
  }

  navigate(url) {
    hashHistory.push(url);
    this.setState({
      menu: false
    })
  }

  toDinner(){
    hashHistory.push('/dinner');
  }

  toProfile(){
    hashHistory.push('/');
  }

  logout() {
    this.props.logout();

    this.setState({
      menu: false
    });
  }

  render() {
    return (
      <div>
        <SnackbarWrapper />
        <AppBar
          title="Knights of the kitchen table"
          iconElementRight={
            <FlatButton label={this.props.isLoggedIn ? this.props.username : 'Log in' } />
          }
          onRightIconButtonTouchTap={this.logout}
          onLeftIconButtonTouchTap={this.toggleMenu}
        />
        <Popover
          open={this.state.menu}>
          <Menu width={300}>
            <MenuItem primaryText="Close" onTouchTap={this.toggleMenu} />
            <MenuItem primaryText="Dinner" onTouchTap={() => this.navigate('/dinner')}/>
            <MenuItem primaryText="Profile" onTouchTap={() => this.navigate('/profile')}/>
            <MenuItem primaryText="Achievements" onTouchTap={() => this.navigate('/achievements')} />
            <Divider />
            <MenuItem primaryText={this.props.username} />
            <MenuItem primaryText="Log out" onTouchTap={this.logout} />
          </Menu>
        </Popover>
        {this.props.isLoggedIn == false ?
          <Login /> :
          <div>
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
  logout: PropTypes.func,
  refresh: PropTypes.func
};

export function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps, {
  logout,
  refresh
})(Overview);
