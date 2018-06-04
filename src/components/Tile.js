// @ts-check

import React from 'react'
import PropTypes from 'prop-types'

/** @type {React.StatelessComponent} */
const Tile = ({obstacle, mine, sub}) => {
  return (
    <div className={"tile"} style={{backgroundColor: obstacle ? 'green' : sub ? 'yellow' : '#3366FF'}}>
    </div>
  )
}

Tile.propTypes = {
    obstacle: PropTypes.bool.isRequired,
    mine: PropTypes.bool.isRequired,
    sub: PropTypes.bool.isRequired
}

export default Tile
