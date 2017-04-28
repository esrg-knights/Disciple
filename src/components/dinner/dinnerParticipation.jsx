import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardHeader, CardText, Toggle } from 'material-ui'

import { setCook, setDishes, setGroceries, setPaid } from '../../actions/dinner'

import Username from '../extra/username'
import { connect } from 'react-redux'

export class DinnerParticipation extends React.Component {
  constructor (props) {
    super(props)

    this.setPaid = (data, checked) => this.props.setPaid(this.props.participation.id, this.props.participation.user, checked)
    this.toggleCook = (data, checked) => this.props.setCook(this.props.participation.id, this.props.participation.user, checked)
    this.toggleDishes = (data, checked) => this.props.setDishes(this.props.participation.id, this.props.participation.user, checked)
    this.toggleGroceries = (data, checked) => this.props.setGroceries(this.props.participation.id, this.props.participation.user, checked)
  }

  render () {
    return (
      <Card>
        <CardHeader
          title={<Username userId={this.props.participation.user}/>}
        />
        <CardText>
          <Toggle
            label="Groceries"
            onToggle={this.toggleGroceries}
            toggled={this.props.participation.work_groceries}
          />
          <Toggle
            label="Cook"
            onToggle={this.toggleCook}
            toggled={this.props.participation.work_cook}
          />
          <Toggle
            label="Dishes"
            onToggle={this.toggleDishes}
            toggled={this.props.participation.work_dishes}
          />
          <Toggle
            label="Paid"
            onToggle={this.setPaid}
            toggled={this.props.participation.paid}
          />
        </CardText>
      </Card>
    )
  }
}

DinnerParticipation.propTypes = {
  participation: React.PropTypes.object.isRequired,
  setPaid: React.PropTypes.func,
  setCook: PropTypes.func,
  setGroceries: PropTypes.func,
  setDishes: PropTypes.func
}

function mapStateToProps (state, ownState) {
  return {
    participation: ownState.participation
  }
}

export default connect(mapStateToProps, {
  setPaid,
  setDishes,
  setGroceries,
  setCook,
})(DinnerParticipation)
