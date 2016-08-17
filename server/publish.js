Posts = new Mongo.Collection("posts");

Meteor.publish("allPosts", function() {
    return Posts.find();
});

Meteor.publish("latestPost", function() {
    return Posts.findOne();
});

Meteor.publish("publishedBlogPosts", function() {

    let feed = require("feed-read");
    let url = "https://www.medium.com/feed/@Poetkoe";
    let firstThreePosts = [];

    return(feed(url, function(err, posts) {
        let self = this;

        if (err) {
            console.log("There has been an error: " + err);
        }

        for(let i = 0; i < 3; i++) {
            firstThreePosts.push({
                "title": posts[i].title,
                "content": posts[i].content,
                "published": posts[i].published,
                "link": posts[i].link
            });
        }
        //console.log(firstThreePosts + "\nsiinä ne ny olis");
        //return firstThreePosts;
        //self.ready();
        let x = "kukkeliskuu";
        return x;
    }));

});
