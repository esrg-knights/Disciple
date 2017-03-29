import React from "react";
import {Card, CardHeader, CardText, Toggle} from "material-ui";

export class DinnerParticipation extends React.Component {
  constructor(props){
    super(props);

    this.togglePaid = this.togglePaid.bind(this);
  }

  togglePaid(){
    console.log('pls toggle paid')
  }
  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.participation.user.username}
        />
        <CardText>
          <Toggle
            label="Groceries"
            toggled={this.props.participation.work_groceries}
          />
          <Toggle
            label="Cook"
            toggled={this.props.participation.work_cook}
          />
          <Toggle
            label="Dishes"
            toggled={this.props.participation.work_dishes}
          />
          <Toggle
            label="Paid"
            toggled={this.props.participation.paid}
            onToggle={this.togglePaid}
          />
        </CardText>
      </Card>
    )
  }
}
