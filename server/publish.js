Posts = new Mongo.Collection("posts");

Meteor.publish("allPosts", function() {
  return Posts.find();
});

Meteor.publish("latestPost", function() {
  return Posts.findOne();
});
