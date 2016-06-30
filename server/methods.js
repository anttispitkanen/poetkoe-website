Meteor.methods({
  addPost(heading, post) {
    Posts.insert({
      heading: heading,
      text: post,
      createdAt: new Date().toISOString()
    });
  }
});
