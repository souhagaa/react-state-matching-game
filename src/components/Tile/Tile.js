import React from 'react'

import './Tile.css'

const Tile = (props) => {
  var color = (props.selected || props.matched ? {backgroundColor: props.color} : null)
  return (
    <div style={color} onClick={() => props.handleTileClicked(props.id, props.color)} className='Tile'>
      {props.selected || props.matched ? <props.svg/> : null}
    </div>
  )
}

export default Tile
