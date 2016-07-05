import React, {Component} from 'react';
import Poetkoesweeper from './poetkoesweeper/Poetkoesweeper.jsx';

export default class Games extends Component {


  render() {
    return(
      <div className="content-wrapper">
        <div className="games-wrapper">
          <Poetkoesweeper />
        </div>
      </div>
    )
  }
}
