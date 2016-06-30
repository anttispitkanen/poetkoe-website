import React, {Component} from 'react';
import {render} from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Home extends Component {

  render() {
    return(
      <div className="content-wrapper">
        <div className="home-wrapper">
          <h1>Poetkoe</h1>
        </div>
      </div>
    )
  }
}
