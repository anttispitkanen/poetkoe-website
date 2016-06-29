Meteor.methods({
  addPost(post) {
    Posts.insert({
      text: post,
      createdAt: new Date().toISOString()
    });
  }
});
