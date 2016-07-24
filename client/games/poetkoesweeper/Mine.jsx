import React, {Component} from 'react';

export default class Mine extends Component {
  expose() {
    document.getElementById(this.props.id).className = "exposed-mine";
    alert("MEOW! \nThe cat was disturbed\nGAME OVER");
  }

  //onClick={this.expose.bind(this)}

  render() {
    return(
      <div className="mine" id={this.props.id} onClick={this.props.clickEvent}><img src="/images/maisa.jpg"></img></div>
    )
  }
}
