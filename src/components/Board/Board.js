import React from 'react'
import './Board.css';
import Tile from '../Tile'

const Board = (props) => {
  var tiles = props.tiles.map(tile => <Tile {...tile}/>)
  const gridConfig = {
    gridTemplateColumns: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
    gridTemplateRows: `repeat(${Math.sqrt(props.numTiles)}, 1fr)`,
  }


  return (
    <div className='Board' tiles={tiles} style={gridConfig}>
      {tiles}
    </div>
  )
}

export default Board
