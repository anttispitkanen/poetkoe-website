import React, {Component} from 'react';
import Namegenerator from "./Namegenerator.jsx";

export default class Coding extends Component {

  render() {
    return(
      <div className="coding">
        <div className="coding-text">
          <h2><a href="https://github.com/anttispitkanen" target="_blank"><i className="fa fa-github"></i> Coding</a></h2>
          <p>
            Besides making music I'm also an aspiring web developer – I've created this
            site from scratch using Meteor and React. You can check out my <a href="https://github.com/anttispitkanen"
            target="_blank">GitHub page here</a>.
          </p>
        </div>

        <i className="coding-icon fa fa-code"></i>

        <h4>Try the Poetkoe namegenerator!</h4>
        <Namegenerator />
      </div>
    )
  }
}
