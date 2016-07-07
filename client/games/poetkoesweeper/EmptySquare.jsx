import React, {Component} from 'react';

export default class EmptySquare extends Component {
  render() {

    let minesTouching = "";
    if (this.props.neighbouringMines > 0) {
      minesTouching = this.props.neighbouringMines;
    }

    return(
      <div className="empty-square">{minesTouching}</div>
    )
  }
}
