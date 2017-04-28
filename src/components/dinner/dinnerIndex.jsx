import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getDiningLists } from '../../actions/dinner'

export class DinnerIndex extends React.Component {
  componentDidMount () {
    this.props.getDiningLists()
  }

  render () {
    return (
      <DiningList diningId={this.props.latestList.id}/>
    )
  }
}

DinnerIndex.propTypes = {
  latestList: PropTypes.shape({
    id: PropTypes.number
  }),
  getDiningLists: PropTypes.func
}

function mapStateToProps (state) {
  return {
    latestList: state.dinner.latestList
  }
}

export default connect(mapStateToProps, {
  getDiningLists
})(DinnerIndex)
