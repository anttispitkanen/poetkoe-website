import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class SinglePost extends TrackerReact(Component) {

  constructor() {
    super();

    this.state = {
      subscription: {
        posts: Meteor.subscribe("allPosts")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.posts.stop();
  }

  post() {
    return Posts.findOne(this.props.id);
  }


  render() {
    let post = this.post();

    if(!post) {
      return(<div>Loading...</div>);
    }

    return(

      <div className="content-wrapper">

        <ul class="blog-posts">
          <li className="single-post">
            <div>
              <h2>{post.heading}</h2>
              <p>{post.text}</p>
            </div>
          </li>
        </ul>
        <div className="timestamp">{moment(post.createdAt).fromNow()}</div>
      </div>
    )
  }
}
