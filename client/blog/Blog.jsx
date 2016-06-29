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
        posts: Meteor.subscribe("posts")
      }
    }
  }

  componentWillUnmount() {
    this.state.subscription.posts.stop();
  }

  posts() {
    return Posts.find().fetch();
  }



  render() {
    return(
      <div className="blog-content-wrapper">
        <h1>Tänne tulee blogi :DD</h1>
        <PostForm />
        <ul class="blog-posts">
          {this.posts().map( (post)=>{
            return <Post key={post._id} post={post}/>
          })}
        </ul>
      </div>
    )
  }
}
