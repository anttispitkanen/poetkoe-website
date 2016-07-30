import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Post from './Post.jsx';
import Blog from './Blog.jsx';


export default class BlogLatest extends TrackerReact(Component) {
  constructor() {
    super();

    this.state = {
      subscription: {
        latestPost: Meteor.subscribe("allPosts")
      }
    };
  }

  componentWillUnmount() {
    this.state.subscription.latestPost.stop();
  }

  //Return latest blogpost
  post() {
    //console.log(Posts.findOne());
    return Posts.find().fetch().reverse()[0];
    //return Posts.findOne();
  }



  render() {
    let latestPost = {};

    if (this.post()) {
      latestPost = this.post();
      console.log(latestPost);
    }

    return(
      <div className="blog-latest">

        <div className="blog-latest-text">
          <h2><a href="/blog"><i className="fa fa-pencil-square-o"></i> Blog</a></h2>
          <p>This is my latest blog post.</p>
          <p>See all of my blog posts <a href="/blog">here</a>.</p>
        </div>

        <ul className="blog-posts">
          <Post key={latestPost._id} post={latestPost} />
        </ul>
      </div>
    )
  }
}
