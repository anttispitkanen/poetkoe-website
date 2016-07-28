import React, {Component} from 'react';
import {render} from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Namegenerator from "./Namegenerator.jsx";


export default class Home extends Component {

  render() {
    return(

      <div className="content-wrapper">

        <img className="main-logo" src="images/poetkoe-black.png" />

        <div className="introduction clearfix">
          <img className="homepage-pic" src="images/SmilePoetkoe3.png" />
          <div className="introduction-text">
            <p>
              I'm Antti "Poetkoe" Pitkänen, a musician and producer from Tampere, Finland.
              I make all my music myself, you can show support by listening on <a href="https://soundcloud.com/poetkoe"
              target="_blank">SoundCloud</a> or <a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw"
              target="_blank">YouTube</a>. Or give a thumbs up on <a href="https://www.facebook.com/poetkoemusic"
              target="_blank">Facebook</a> if you feel like it!
            </p>
          </div>
        </div>

        <iframe className="homepage-video" width="560" height="315" src="https://www.youtube.com/embed/VS5YosCbyXM" frameborder="0" allowfullscreen></iframe>


        <p>
          Besides making music I'm also an aspiring web developer – I've created this
          site from scratch using Meteor and React. You can check out my <a href="https://github.com/anttispitkanen"
          target="_blank">GitHub page here</a>.
        </p>
        <h4>Try the Poetkoe namegenerator!</h4>
        <Namegenerator />

      </div>
    )
  }
}
