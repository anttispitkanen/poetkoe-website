import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Blogbanner from './Blogbanner.jsx';

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
        <Blogbanner />

        <ul class="blog-posts">
          <li className="single-post">
            <div>
              <h2>{post.heading}</h2>
              <div className="timestamp-and-signature">{moment(post.createdAt).fromNow()} by Antti "Poetkoe" Pitkänen</div>
              <p>{post.text}</p>
              <a className="back" href="/blog">Back</a>
            </div>
          </li>
        </ul>

      </div>
    )
  }
}
