import React from 'react'

import './Tile.css'

const Tile = (props) => {
  var color = (props.selected || props.matched ? {backgroundColor: props.color} : null)
  return (
    <div color={color} className='Tile'>
      props.selected || props.matched ? <svg/> : null
    </div>
  )
}

export default Tile
