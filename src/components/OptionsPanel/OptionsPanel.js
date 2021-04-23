import React from 'react'

import Button from '../Button'
import TileSelector from '../TileSelector'

const OptionsPanel = (props) => (
  <div>
    <TileSelector numTiles={props.numTiles}/>
    <Button startGame={props.startGame} playing={props.playing}/>
  </div>
)
  
  

export default OptionsPanel
