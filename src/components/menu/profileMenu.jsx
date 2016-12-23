import React from 'react';
import {hashHistory} from 'react-router';
import {Menu, MenuItem} from 'material-ui';
import {logout} from '../../actions/auth';
import {dispatch} from 'redux';

export const ProfileMenu = props => (
  <Menu>
    <MenuItem primaryText="Logout" onTouchTap={dispatch(logout)}/>
  </Menu>
);
