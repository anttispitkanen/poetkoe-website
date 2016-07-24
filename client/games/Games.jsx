import React, {Component} from 'react';
import Poetkoesweeper from './poetkoesweeper/Poetkoesweeper.jsx';

export default class Games extends Component {


  render() {
    return(
      <div className="content-wrapper">
        <h1>Games</h1>
        <Poetkoesweeper />
      </div>
    )
  }
}
