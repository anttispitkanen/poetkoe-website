import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Session} from 'meteor/session';
import LatestPost from './LatestPost.jsx';

//PublishedBlogPosts = new Mongo.Collection(null);
let Promise = require("bluebird");

export default class BlogLatest extends TrackerReact(Component) {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        let self = this;
        this.posts(self);
        /*
        this.getJeppisjepulis().then( (jee) => {
            self.setState({posts: jee});
        })
        */
        /*
        this.posts().then( freshPosts => {
            self.setState({posts: freshPosts});
        });
        */
    }
    /*
    componentWillMount() {
        this.setState(freshBlogPost = Meteor.call("fetchLatestBlogposts", (error, result) => {
            if(error) {
                console.log("Errori!!! " + error);
            }
            if(result) {
                console.log(result);
                return result;
            }
        }))
    }
    */



    //this one uses Meteor methods

    posts(self) {
        Meteor.call("fetchLatestBlogposts", function(err, result) {
            if (err) {
                console.log("error in client: " + err);
            }
            if (result) {
                console.log(result);
                self.setState({posts: result});
                //return result;
            }
            console.log("no result found");
            return("abc");
        });
    }



    promiseFunction() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve();
            }, 10);
        })
    }

    getJeppisjepulis() {
        return this.promiseFunction().then( () => {
            return "jeppisjepulis";
        })
    }




    render() {

        return(
            <div className="blog-latest">
                <div className="blog-latest-text">
                    <h2><a href="https://www.medium.com/@Poetkoe" target="_blank"><i className="fa fa-pencil-square-o"></i> Blog</a></h2>
                    <p>These are my latest blog posts.</p>
                    <p>You can find my blog on <a href="https://www.medium.com/@Poetkoe" target="_blank">Medium</a>.</p>
                    <p>{this.state.posts}</p>
                    {console.log("UI " + this.state.posts)}
                </div>
            </div>
        )
    }
}

/*
let latestPosts = this.posts();
console.log(latestPosts);

if (latestPosts === undefined) {
    return(<h2>Loading...</h2>);
}
*/
