import React, {Component} from 'react';

export default class PostForm extends Component {

  addPost(event) {
    event.preventDefault();

    Meteor.call("addPost", this.refs.heading.value, this.refs.post.value);

    this.refs.heading.value = "";
    this.refs.post.value = "";
  }

  render() {
    return(
      <form className="newPost" onSubmit={this.addPost.bind(this)}>
        <input
            type="text-area"
            ref="heading"
            placeholder="Otsikko"/>
        <input
            type="text-area"
            ref="post"
            placeholder="Sisältö"/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
