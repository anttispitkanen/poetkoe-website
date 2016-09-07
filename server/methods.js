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
        let firstPosts = ["kukkuu"];
        let Promise = require("bluebird");
        /*
        promiseFunction() {
            return new Promise( (resolve, reject) => {
                setTimeout( () => {
                    resolve();
                }, 3000);
            })
        }

        getKukkuu() {
            return promiseFunction().then( () => {
                return "kukkuu";
            })
        }
        */
        //return firstPosts;


        return feed(url, function(err, posts) {
            if (err) {
                console.log("There has been an error: " + err);
            }

            for(let i = 0; i < 2; i++) {
                firstPosts.push({
                    "title": posts[i].title,
                    "content": posts[i].content,
                    "published": posts[i].published,
                    "link": posts[i].link
                });
            }
            console.log("hello from server" +firstPosts);
            return firstPosts;
        });

/*

*/
    }
});
