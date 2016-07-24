import React, {Component} from 'react';

export default class EmptySquare extends Component {
  expose() {
    document.getElementById(this.props.id).className = "exposed-empty-square";
  }

  render() {

    let minesTouching = "";
    if (this.props.neighbouringMines > 0) {
      minesTouching = this.props.neighbouringMines;
    }

    return(
      <div className="empty-square" id={this.props.id} onClick={this.expose.bind(this)}><p>{minesTouching}</p></div>
    )
  }
}
