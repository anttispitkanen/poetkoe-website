import React, {Component} from 'react';

export default class EmptySquare extends Component {
  render() {
    return(
      <div className="empty-square">{this.props.neighbouringMines}</div>
    )
  }
}
