import React from "react";
import {Card, CardHeader, CardText, Toggle} from "material-ui";
import {connect} from "react-redux";

import {updateParticipation} from '../../actions/dinner';
export class DinnerParticipation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCook = this.toggleCook.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggleCook() {
    this.props.updateParticipation(this.props.participation.id, !this.props.participation.work_cook)
  }

  toggle(action) {
    let cook = this.props.participation.work_cook;
    let dishes = this.props.participation.work_dishes;
    let groceries = this.props.participation.work_groceries;
    let paid = this.props.participation.paid;

    switch (action) {
      case "cook":
        cook = !cook;
        break;
      case "dishes":
        dishes = !dishes;
        break;
      case "groceries":
        groceries = !groceries;
        break;
      case "paid":
        paid = !paid;
        break;
    }

    this.props.updateParticipation(this.props.participation.id, groceries, cook, dishes, paid)
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
            onToggle={() => this.toggle('groceries')}
          />
          <Toggle
            label="Cook"
            toggled={this.props.participation.work_cook}
            onToggle={() => this.toggle('cook')}
          />
          <Toggle
            label="Dishes"
            toggled={this.props.participation.work_dishes}
            onToggle={() => this.toggle('dishes')}
          />
          <Toggle
            label="Paid"
            toggled={this.props.participation.paid}
            onToggle={() => this.toggle('paid')}
          />
        </CardText>
      </Card>
    )
  }
}
DinnerParticipation.propTypes = {
  updateParticipation: React.PropTypes.func
};

export function mapStateToProps(state) {
  return state.dinner;
}
export default connect(mapStateToProps, {
  updateParticipation
})(DinnerParticipation)
