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
                        "formattedText": formatBlogpost(posts[i].content),
                        "formattedDate": formatDate(posts[i].published),
                        "link": posts[i].link,
                        "postID": i
                    });
                }
                future.return(firstPosts);
            }
        });

        return future.wait();

    },

    //fetch the rest of the blogposts starting from index 3
    fetchRestOfBlogposts() {
        let feed = require("feed-read");
        let url = "https://www.medium.com/feed/@Poetkoe";
        let restOfPosts = [];
        let Future = require("fibers/future");
        let future = new Future();


        feed(url, (err, posts) => {
            if (err) {
                console.log("There has been an error: " + err);
            } else {
                for(let i = 3; i < posts.length; i++) {
                    restOfPosts.push({
                        "title": posts[i].title,
                        "formattedText": formatBlogpost(posts[i].content),
                        "formattedDate": formatDate(posts[i].published),
                        "link": posts[i].link,
                        "postID": i
                    });

                }
                future.return(restOfPosts);
            }
        });

        return future.wait();
    }

});





function formatBlogpost(text) {
    //content text snippet in a p with class "medium-feed-snippet"
    //so let's find that index and start reading after it
    let begin = text.indexOf('medium-feed-snippet') + 21;
    let parsedString = text.substr(begin);

    //text ends with a tag ("<") or with "&#x"
    //let's find which comes first and chop there
    let firstTagOpens = parsedString.indexOf('<');
    let textEnds = parsedString.indexOf('&#x') > 0 ? parsedString.indexOf('&#x') : 1000;
    //epic hack to counter the negative index

    let smallerOfTheTwo = firstTagOpens < textEnds ? firstTagOpens : textEnds;
    parsedString = parsedString.substr(0, smallerOfTheTwo);

    //if last character is a period (full sentence) do nothing, if it's not (sentence chopped)
    //add three dots to end
    if (parsedString[parsedString.length-1] !== ".") {
        parsedString += "...";
    }

    return parsedString;
}



function formatDate(date) {
    //date in form of "Sun Sep 25 2016 16:44:09 GMT+0300 (EEST)"
    //so lets start from index 4
    let dateString = date.toString().substr(4);

    //we want the "Sep 25 2016" part
    // up to the index of the first ":" and
    //a few steps back from there
    let indexOfFirstColon = dateString.indexOf(":");
    let formattedDate = dateString.substr(0, indexOfFirstColon-3);

    return formattedDate;
}
