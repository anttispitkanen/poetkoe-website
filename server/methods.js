Meteor.methods({

    fetchLatestBlogposts() {
        let feed = require("feed-read");
        let url = "https://www.medium.com/feed/@Poetkoe";
        let firstPosts = [];
        let Future = require("fibers/future");
        let future = new Future();

        feed(url, (err, posts) => {
            if (err) {
                console.log("There has been an error: " + err);
            } else {
                for(let i = 0; i < 3; i++) {
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

    }

});
