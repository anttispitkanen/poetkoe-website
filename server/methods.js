Meteor.methods({
  addPost(heading, post) {

    let preview = "";

    if (post.length > 300) {
      preview = post.substring(0, 300).trim() + "...";
    } else {
      preview = post;
    }

    Posts.insert({
      heading: heading,
      text: post,
      preview: preview,
      createdAt: new Date().toISOString()
    });
  }
});
