import React, {Component} from 'react';

export default class Post extends Component {

  render() {
    return(
      <li>
        <div>
          <div>{this.props.post.text}</div>
          <span>{moment(this.props.post.createdAt).fromNow()}</span>
        </div>
      </li>
    )
  }
}
