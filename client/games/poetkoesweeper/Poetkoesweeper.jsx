import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Mine from './Mine.jsx';
import EmptySquare from './EmptySquare.jsx';

function generateGrid() {
  let numMines = 15;
  let arrayToBeFilledWithRandomNumbers = [];
  let singleRow = [];

  //first populate grid with 0s (EmptySquares)
  for(i = 0; i < 10; i++) {
    singleRow = [];
    for(j = 0; j < 10; j++) {
      singleRow.push(0);
    }
    arrayToBeFilledWithRandomNumbers.push(singleRow);
  }

  //then add numMines mines, making sure they end up in separate locations
  while(numMines > 0) {
    let i = Math.floor((Math.random() * 10));
    let j = Math.floor((Math.random() * 10));

    if(arrayToBeFilledWithRandomNumbers[i][j] !== 1) {
      arrayToBeFilledWithRandomNumbers[i][j] = 1;
      numMines--;
    }
  }

  return arrayToBeFilledWithRandomNumbers;
}

function countMines() {
  let grid = generateGrid();
  let returnedGrid = [];

  //for each square in the grid
  for (x = 0; x < 10; x++) {
    for (y = 0; y < 10; y++) {

      //keepig track of the unique id
      let id = 10*x + y;

      //for all non-mines
      if (grid[x][y] !== 1) {
        let numberOfTouchingMines = 0;

        //for all neighbouring squares within the grid
        for (i = x-1; i <= x+1; i++) {
          if (i >= 0 && i < 10) {
            for (j = y-1; j <= y+1; j++) {
              if (j >= 0 && j < 10) {

                //if the inspected neighbour is a mine, increment numberOfTouchingMines
                if (grid[i][j] === 1) {
                  numberOfTouchingMines++;
                }
              }
            }
          }
        }
        //in case it's not a mine push EmptySquare with numberOfTouchingMines as prop
        returnedGrid.push(<EmptySquare neighbouringMines={numberOfTouchingMines} key={id} id={id} />);
      } else {
        //in case it is a mine just push a mine
        returnedGrid.push(<Mine key={id} id={id} clickEvent={console.log("loool")} />);
      }
    }
  }
  return returnedGrid;
}



export default class Poetkoesweeper extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      numMines: 15,
      grid: null
    };
  }

/*  generateGrid() {
    let numMines = this.state.numMines;
    let arrayToBeFilledWithRandomNumbers = [];
    let singleRow = [];

    //first populate grid with 0s (EmptySquares)
    for(i = 0; i < 10; i++) {
      singleRow = [];
      for(j = 0; j < 10; j++) {
        singleRow.push(0);
      }
      arrayToBeFilledWithRandomNumbers.push(singleRow);
    }

    //then add numMines mines, making sure they end up in separate locations
    while(numMines > 0) {
      let i = Math.floor((Math.random() * 10));
      let j = Math.floor((Math.random() * 10));

      if(arrayToBeFilledWithRandomNumbers[i][j] !== 1) {
        arrayToBeFilledWithRandomNumbers[i][j] = 1;
        numMines--;
      }
    }

    return arrayToBeFilledWithRandomNumbers;
  }

  countMines() {
    let grid = this.generateGrid();
    let returnedGrid = [];

    //for each square in the grid
    for (x = 0; x < 10; x++) {
      for (y = 0; y < 10; y++) {

        //keepig track of the unique id
        let id = 10*x + y;

        //for all non-mines
        if (grid[x][y] !== 1) {
          let numberOfTouchingMines = 0;

          //for all neighbouring squares within the grid
          for (i = x-1; i <= x+1; i++) {
            if (i >= 0 && i < 10) {
              for (j = y-1; j <= y+1; j++) {
                if (j >= 0 && j < 10) {

                  //if the inspected neighbour is a mine, increment numberOfTouchingMines
                  if (grid[i][j] === 1) {
                    numberOfTouchingMines++;
                  }
                }
              }
            }
          }
          //in case it's not a mine push EmptySquare with numberOfTouchingMines as prop
          returnedGrid.push(<EmptySquare neighbouringMines={numberOfTouchingMines} key={id} id={id} />);
        } else {
          //in case it is a mine just push a mine
          returnedGrid.push(<Mine key={id} id={id} clickEvent={console.log("loool")} />);
        }
      }
    }
    //return returnedGrid;
    this.setState({grid: returnedGrid});
  }*/

  newGame() {
    console.log("new game");
    document.getElementById('game-info').style.display = "none";
    document.getElementById('poetkoesweeper-grid').style.display = "block";
  }

/*
  componentWillMount() {
    countMines();
  }
*/

  render() {

    let grid = countMines();

    return(
      <div className="poetkoesweeper-game">
        <h3>There are {this.state.numMines} cats to avoid disturbing</h3>
        <button onClick={countMines}>Reset</button>
        <div className="game-info" id="game-info">
          <p>INFOO</p>
          <button className="new-game" onClick={this.newGame}>New game</button>
        </div>
        <div className="poetkoesweeper-grid" id="poetkoesweeper-grid">
          {countMines().map( (component) => {
            return component;
          })}
        </div>

      </div>
    )
  }
}
