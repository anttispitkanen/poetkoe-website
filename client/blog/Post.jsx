import React, {Component} from 'react';

export default class Post extends Component {

  render() {

    let postId = this.props.post._id;

    return(
      <li className="single-post">
        <div>
          <h2><a href={`/blog/${postId}`}>{this.props.post.heading}</a></h2>
          <p>{this.props.post.preview} <a href={`/blog/${postId}`}>read more</a></p>
          <span className="timestamp">{moment(this.props.post.createdAt).fromNow()}</span>
        </div>
      </li>
    )
  }
}
