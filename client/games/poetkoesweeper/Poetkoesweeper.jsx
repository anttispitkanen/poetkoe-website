import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Mine from './Mine.jsx';
import EmptySquare from './EmptySquare.jsx';

export default class Poetkoesweeper extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      numMines: 15
    };
  }

  generateGrid() {
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

    //then add numMines mines, making sure they end up in separata locations
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
          returnedGrid.push(<EmptySquare neighbouringMines={numberOfTouchingMines} key={id} />);
        } else {
          //in case it is a mine just push a mine
          returnedGrid.push(<Mine key={id} />);
        }
      }
    }
    return returnedGrid;
  }



  render() {


    let components = this.countMines();

    return(
      <div>
        <h3>There are {this.state.numMines} cats to avoid disturbing</h3>
        <div className="poetkoesweeper-grid">
          {components.map( (component) => {
            return component;
          })}

        </div>
      </div>
    )
  }
}
