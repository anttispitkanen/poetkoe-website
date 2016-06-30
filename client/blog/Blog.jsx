import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import PostForm from './PostForm.jsx';
import Post from './Post.jsx';

Posts = new Mongo.Collection("posts");

export default class Blog extends TrackerReact(Component) {
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

  //Return all blogposts newest first
  posts() {
    return Posts.find().fetch().reverse();
  }



  render() {
    return(
      <div className="content-wrapper">
        <h1>Blog</h1>
        <PostForm />
        <ul class="blog-posts">
          {this.posts().map( (post)=>{
            return <Post key={post._id} post={post} />
          })}
        </ul>
      </div>
    )
  }
}
