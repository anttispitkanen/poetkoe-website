/*
let feed = require("feed-read");
let url = "https://www.medium.com/feed/@Poetkoe";
let firstPosts = ["kukkuu"];
let Promise = require("bluebird");

feed(url, function(err, posts) {
    if (err) {
        console.log("There has been an error: " + err);
    }


    return posts;
    console.log(posts);
});
*/

Meteor.methods({
    addPost(heading, post) {

        let searchableText = heading + " " + post;

        let preview = "";

        if (post.length > 300) {
            preview = post.substring(0, 300).trim() + "...";
        } else {
            preview = post;
        }

        Posts.insert({
            searchableText: searchableText,
            heading: heading,
            text: post,
            preview: preview,
            createdAt: new Date().toISOString()
        });
    },



    fetchLatestBlogposts() {
        let feed = require("feed-read");
        let url = "https://www.medium.com/feed/@Poetkoe";
        let firstPosts = [];
        let Future = require("fibers/future");
        let future = new Future();
        //let Promise = require("bluebird");

        feed(url, (err, posts) => {
            if (err) {
                console.log("There has been an error: " + err);
            } else {
                for(let i = 0; i < 2; i++) {
                    firstPosts.push({
                        "title": posts[i].title,
                        "content": posts[i].content,
                        "published": posts[i].published,
                        "link": posts[i].link
                    });
                }
                future.return(firstPosts);
            }
        });

        return future.wait();

        /*
        for(let i = 0; i < 2; i++) {
            firstPosts.push({
                "title": posts[i].title,
                "content": posts[i].content,
                "published": posts[i].published,
                "link": posts[i].link
            });
        }
        console.log("hello from server" +firstPosts);
        */


    }

});
