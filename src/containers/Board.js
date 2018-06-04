import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Board from '../components/Board';

import { moveWest, moveEast, moveNorth, moveSouth } from '../actions/sonar';

const mapStateToProps = (state) => ({ board: state.sonar.board })

const mapDispatchToProps = (dispatch) => ({
    moveWest: () => dispatch(moveWest()),
    moveEast: () => dispatch(moveEast()),
    moveNorth: () => dispatch(moveNorth()),
    moveSouth: () => dispatch(moveSouth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Board)
