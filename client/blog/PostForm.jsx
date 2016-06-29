import React, {Component} from 'react';

export default class PostForm extends Component {

  addPost(event) {
    event.preventDefault();

    Meteor.call("addPost", this.refs.blogpost.value);

    this.refs.blogpost.value = "";
  }

  render() {
    return(
      <form className="newPost" onSubmit={this.addPost.bind(this)}>
        <input
            type="text-area"
            ref="blogpost"
            placeholder="Kirjoita jotain :DD"/>
      </form>
    )
  }
}
