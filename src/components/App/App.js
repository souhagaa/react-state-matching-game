import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';
import { createTiles } from '../../misc/utils'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      numTiles : 36,
      playing : false,
      previousTileIndex : null,
      tiles : [],
      toBeCleared : null
    }
    this.startGame = this.startGame.bind(this)
  }
  startGame(numTiles){
    this.setState(state => {
      return {
        playing : true,
        previousTileIndex : null,
        toBeCleared : null,
        tiles: createTiles(state.numTiles),
      }
    })
  }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        Turbo-Matcher
      </header>
        <OptionsPanel playing={this.state.playing} numTiles={this.state.numTiles} startGame={this.startGame}/>
        <Board tiles={this.state.tiles} numTiles={this.state.numTiles}/>
    </div>
  );

  }
}

export default App;
