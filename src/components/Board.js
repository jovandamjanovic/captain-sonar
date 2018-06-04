// @ts-check

import React from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile';

/** @type { React.StatelessComponent } */
const Board = ({board, moveWest, moveEast, moveNorth, moveSouth}) => {
  return (
    <div>
        <div className={'board'} style={{width: `${Math.sqrt(board.length)*26}px`, display: 'grid', grid: `repeat(${Math.sqrt(board.length)}, 1fr) / repeat(${Math.sqrt(board.length)}, 1fr)`}}>
          {board.map((c, index) => (<Tile key={index} obstacle={c.obstacle} mine={c.potentialMine} sub={c.containsSub} />))}
        </div>
        <button onClick={moveNorth}>N</button>
        <button onClick={moveEast}>E</button>
        <button onClick={moveWest}>W</button>
        <button onClick={moveSouth}>S</button>
    </div>
  )
}

Board.propTypes = {
    board: PropTypes.arrayOf(PropTypes.shape({
        potentialMine: PropTypes.bool.isRequired,
        obstacle: PropTypes.bool.isRequired,
        containsSub: PropTypes.bool.isRequired,
        subPath: PropTypes.bool.isRequired
    })),
    moveWest: PropTypes.func.isRequired,
    moveEast: PropTypes.func.isRequired,
    moveNorth: PropTypes.func.isRequired,
    moveSouth: PropTypes.func.isRequired
}

export default Board