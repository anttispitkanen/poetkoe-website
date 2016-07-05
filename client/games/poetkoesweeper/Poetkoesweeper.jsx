import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Mine from './Mine.jsx';
import EmptySquare from './EmptySquare.jsx';

export default class Poetkoesweeper extends TrackerReact(Component) {

  constructor() {
    super();
    this.state = {
      grid: [
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [2, 3, 1, 2, 3, 1, 2, 3, 4, 1],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [3, 1, 2, 3, 1, 2, 3, 4, 1, 2],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4],
        [1, 2, 3, 1, 2, 3, 1, 2, 3, 4]
      ]
    }
  }

  countMines() {
    let grid = this.state.grid;
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
          //console.log(numberOfTouchingMines);
          returnedGrid.push(<EmptySquare neighbouringMines={numberOfTouchingMines} key={id} />);
        } else {
          //in case it is a mine just push a mine
          //console.log("miina");
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
        <div className="poetkoesweeper-grid">
          {components.map( (component) => {
            return component;
          })}

        </div>
      </div>
    )
  }
}

//{components.map( (row, i) => {
//  return row.map( (component, j) => {
//    if (component === 1) {
//      return <Mine key={(i+1)*j} />
//    } else {
//      return <EmptySquare key={(i+1)*j} />
//    }
//  }
//)})}
