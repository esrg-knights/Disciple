import React from 'react';
import {FlatButton} from 'material-ui';

export class MainMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      toggled: false
    }
  }

  render(){
    return (
      <div>
        <FlatButton label="Menu" />
      </div>
    )
  }
}
