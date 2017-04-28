import React from 'react'
import * as PropTypes from 'react/lib/ReactPropTypes'
import { getDiningLists, getDiningParticipations } from '../../actions/dinner'
import { connect } from 'react-redux'
import DinnerParticipation  from './dinnerParticipation'

export class Dinner extends React.Component {
  componentDidMount () {
    this.props.getDiningLists()
      .then(() => this.props.getDiningParticipations(this.props.latestList.id))
  }

  render () {
    return (
      <div>
        <h1>De eetlijst van {this.props.latestList.relevant_date || 'Weten we nog niet!'}</h1>

        {this.props.participations.map((participation, key) => <DinnerParticipation participation={participation}/>)}
      </div>
    )
  }
}

Dinner.propTypes = {
  isFetching: PropTypes.bool,
  latestList: PropTypes.shape({
    relevant_date: PropTypes.string
  }),
  participations: PropTypes.array,
  getDiningLists: PropTypes.func,
  getDiningParticipations: PropTypes.func
}

export function mapStateToProps (state) {
  return {
    latestList: state.dinner.latestList,
    participations: state.dinner.participations
  }
}

export default connect(mapStateToProps, {
  getDiningLists,
  getDiningParticipations
})(Dinner)
