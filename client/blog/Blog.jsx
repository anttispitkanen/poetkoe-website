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
      },
      search: ''
    };
  }

  componentWillUnmount() {
    this.state.subscription.posts.stop();
  }

  //Return all blogposts newest first
  posts() {
    return Posts.find().fetch().reverse();
  }

  updateSearch(event) {
    this.setState({search: event.target.value});
  }



  render() {

    let filteredPosts = this.posts().filter(
      (post) => {
        return post.searchableText.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return(
      <div className="content-wrapper">

        <h1>Blog</h1>
        <PostForm />
        <input className="search-box"
            type="text-area"
            ref="search"
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
            placeholder="Search from blog"/>

        <ul class="blog-posts">
          {filteredPosts.map( (post)=>{
            return <Post key={post._id} post={post} />
          })}
        </ul>

      </div>
    )
  }
}
