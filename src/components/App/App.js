import React, { Component } from 'react';
import OptionsPanel from '../OptionsPanel'
import Board from '../Board'

import './App.css';
import {indexOfSelected, createTiles } from '../../misc/utils'
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
    this.handleTileClicked = this.handleTileClicked.bind(this)
  }
  
  handleTileClicked(id, color){

    this.setState(state => {

      const tiles = state.tiles
      var toBeCleared = state.toBeCleared
      const selectedTileIndex = indexOfSelected(tiles, id, color)
      var previousTileIndex = state.previousTileIndex
      if(toBeCleared !== null){

        tiles[toBeCleared[0]].selected = false
        tiles[toBeCleared[1]].selected = false
        toBeCleared = null

      }
      tiles[selectedTileIndex].selected = true
      if(previousTileIndex !== null) {

        var previousTile = tiles[previousTileIndex]
        var selectedTile = tiles[selectedTileIndex]

        if(previousTile.id !== selectedTile.id && previousTile.color === color){

          selectedTile.matched = true
          previousTile.matched = true
          previousTileIndex = null

        } else {

          toBeCleared = [previousTileIndex, selectedTileIndex]
          previousTileIndex = null

        }
      } else {

        previousTileIndex = selectedTileIndex

      }

      return {
        tiles : tiles,
        toBeCleared: toBeCleared,
        previousTileIndex: previousTileIndex
      }

    })
  }
  startGame(numTiles){
    this.setState(state => {
      return {
        playing : true,
        previousTileIndex : null,
        toBeCleared : null,
        tiles: createTiles(state.numTiles, this.handleTileClicked),
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
