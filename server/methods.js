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

    }

});


function formatBlogpost(text) {
    //there's always the same html tags in the beginning of the result
    //text starts from index 61
    let t = text.substr(61);

    //text ends either with a tag ("<") or an ampersand ("&"),
    //let's find out which comes first and chop there
    //this obviously fails to function properly if the text contains an ampersand
    let firstTagOpens = t.indexOf("<");
    let textEnds = t.indexOf("&") > 0 ? t.indexOf("&") : 1000; //dumb hack to counter the negative index
    let smallerOfTheTwo = firstTagOpens < textEnds ? firstTagOpens : textEnds;

    let croppedText = t.substr(0, smallerOfTheTwo);

    //if last character is a period (full sentence) do nothing, if it's not (sentence chopped)
    //add three dots to end
    if (croppedText[croppedText.length-1] !== ".") {
        croppedText += "...";
    }

    return croppedText;
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
