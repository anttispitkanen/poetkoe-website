import React, {Component} from 'react';
import {render} from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Home extends Component {

  render() {
    return(
      <div className="content-wrapper">
        <div className="home-wrapper">
          <img className="poetkoe-pic" src="images/face.jpg" />
          <img className="main-logo" src="images/poetkoe-black.png" />
          <h2>Welcome to Poetkoe's website!</h2>
          <p>
            I'm Antti "Poetkoe" Pitkänen, a musician from Tampere, Finland.
            Besides making music I'm also an aspiring web developer - I've created this site from scratch using Meteor and React.
          </p>
        </div>
      </div>
    )
  }
}
