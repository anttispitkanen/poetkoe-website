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

        let self = this;
        let feed = require("feed-read");
        let url = "https://www.medium.com/feed/@Poetkoe";



        feed(url, function(err, posts) {
            
            if (err) {
                console.log("There has been an error: " + err);
            }

            let firstThreePosts = [];

            for(let i = 0; i < 3; i++) {
                firstThreePosts.push({
                    "title": posts[i].title,
                    "content": posts[i].content,
                    "published": posts[i].published,
                    "link": posts[i].link
                });
            }
            //console.log(firstThreePosts + "\nsiinä ne ny olis");
            //session.set("firstThreePosts", firstThreePosts);

            //return ("kukkuu " + firstThreePosts);
            //return "kukkuu serveriltä";

        });

        //return("kukkuu! serveriltä päivää!" + firstThreePosts);
    }
});
