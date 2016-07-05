import React, {Component} from 'react';

export default class Mine extends Component {

  gameOver() {
    alert("game over");
  }

  render() {
    return(
      <div className="mine" onClick={this.gameOver}><img src="/images/maisa.jpg"></img></div>
    )
  }
}
