import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class Namegenerator extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      originalName: '',
      poetkoeifiedName: ''
    };
  }

  updateName(event) {
    this.setState({originalName: event.target.value.substr(0, 28)});
  }

  poetkoeifyName(event) {
    event.preventDefault();
    let originalName = this.state.originalName.toUpperCase();
    let poetkoeifiedName = originalName.replace(/Ä/g, "AE").replace(/Ö/g, "OE").replace(/Ü/g, "UE");
    this.setState({poetkoeifiedName: poetkoeifiedName + " :DD"});
    this.setState({originalName: ''});
  }

  render() {
    return(
      <div className="poetkoe-namegenerator">
        <form onSubmit={this.poetkoeifyName.bind(this)}>
          <input className="poetkoe-namegenerator-input"
                  type="text"
                  maxlength="30"
                  value={this.state.originalName}
                  ref="name"
                  placeholder="Your name here"
                  onChange={this.updateName.bind(this)} />
                <p className="output" onClick={this.poetkoeifyName.bind(this)}>Your Poetkoeified name is... <br/> {this.state.poetkoeifiedName}</p>
          <p className="hint">(Try "Kimi Räikkönen" or "Mika Häkkinen")</p>
        </form>
      </div>
    )
  };

}
