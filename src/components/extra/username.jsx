import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getAllUsers } from '../../actions/user'

class Username extends React.Component {
  constructor (props) {
    super(props)

    this.state = {user: undefined}
  }

  componentDidMount () {
    this.props.getAllUsers()
      .then(() => this.setState({
        user: this.props.users.find(user => user.id === this.props.userId)
      }))
  }

  render () {
    return (
      <span>{this.state.user !== undefined ? this.state.user.username : 'Unknown'}</span>
    )
  }
}

Username.propTypes = {
  userId: PropTypes.number,
  users: PropTypes.array,
  getAllUsers: PropTypes.func
}

function mapStateToProps (state, ownProps) {
  return {
    userId: ownProps.userId,
    users: state.user.users
  }
}

export default connect(mapStateToProps, {
  getAllUsers
})(Username)
