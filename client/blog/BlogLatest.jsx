import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Session} from 'meteor/session';
import LatestPost from './LatestPost.jsx';

PublishedBlogPosts = new Mongo.Collection(null);

export default class BlogLatest extends TrackerReact(Component) {
    constructor() {
        super();

        this.state = {
            subscription: {
                publishedBlogPosts: Meteor.subscribe("publishedBlogPosts")
            }
        };
    }

    componentWillUnmount() {
        this.state.subscription.publishedBlogPosts.stop();
    }

/*
    //Return latest blogposts
    posts() {
        console.log("täällä clientin metodissa publishedBlogPosts on: " + PublishedBlogPosts.find().fetch());
        return PublishedBlogPosts.find().fetch();
    }
*/

    //this one uses Meteor methods
    posts() {

        Meteor.call("fetchLatestBlogposts", function(err, result) {
            if (err) {
                console.log("joku virhe: " + err);
                return "";
            }

            if (result) {
                console.log("tässä pitäisi tulla tulokset");
                console.log(result);
                return result;
            }
            console.log("ei ollu resulttia");
        });
    }


    render() {

        let latestPosts = this.posts();
        console.log(latestPosts);

        if (latestPosts === undefined) {
            return(<h2>Loading...</h2>);
        }

        return(
            <div className="blog-latest">

                <div className="blog-latest-text">
                    <h2><a href="https://www.medium.com/@Poetkoe" target="_blank"><i className="fa fa-pencil-square-o"></i> Blog</a></h2>
                    <p>These are my latest blog posts.</p>
                    <p>You can find my blog on <a href="https://www.medium.com/@Poetkoe" target="_blank">Medium</a>.</p>
                    {console.log(latestPosts)}
                </div>


            </div>
        )
    }
}
