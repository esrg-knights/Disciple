import React from 'react'
import { Subheader } from 'material-ui'
import PropTypes from 'prop-types'
import { claimList, getDiningLists, getDiningParticipations, joinList } from '../../actions/dinner'
import DinnerParticipation from './dinnerParticipation'

import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial'
// just some icons for illustration (example only):
import ContentAdd from 'material-ui/svg-icons/content/add'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import { fabStyle } from '../const'
import Username from '../extra/username'
import { connect } from 'react-redux'
export class Dinner extends React.Component {
  componentDidMount () {
    this.props.getDiningLists()
      .then(() => this.props.getDiningParticipations(this.props.latestList.id))
  }

  render () {
    return (
      <div>
        <h1>De eetlijst van {this.props.latestList.relevant_date || 'Weten we nog niet!'}</h1>
        <Subheader>De eetlijst van <Username userId={this.props.latestList.owner}/></Subheader>

        {this.props.participations.map((participation, key) => <DinnerParticipation participation={participation}/>)}
        <SpeedDial
          style={fabStyle}
          fabContentOpen={<ContentAdd />}
          fabContentClose={<NavigationClose />}>
          <SpeedDialItem label="Claim"
                         onTouchTap={() => this.props.claimList(this.props.latestList.id)}/>
          <SpeedDialItem label="Join"
                         onTouchTap={() => this.props.joinList(this.props.latestList.id, 1)}/>
        </SpeedDial>
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
  getDiningParticipations: PropTypes.func,
  joinList: PropTypes.func,
  claimList: PropTypes.func
}

export function mapStateToProps (state) {
  return {
    latestList: state.dinner.latestList,
    participations: state.dinner.participations
  }
}

export default connect(mapStateToProps, {
  getDiningLists,
  getDiningParticipations,
  joinList,
  claimList
})(Dinner)
