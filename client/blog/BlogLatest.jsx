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
        //this.tryThisPosts(self);
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

    tryThisPosts(self) {
        Meteor.apply("fetchLatestBlogposts", [], {wait: true}, (err, result) => {
            if (err) {
                console.log("error in client: " + err);
            }
            if (result) {
                console.log(result);
                self.setState({posts: result});
            } else {
                console.log("no result found :(");
            }
        });
    }



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
            } else {
                console.log("no result found");
            }
        });
    }

/*
    async asyncPosts(self) {
        let result = await this.callMeteorMethod("fetchLatestBlogposts");
        //console.log(result);
        self.setState({posts: result});
    }

    callMeteorMethod(methodName, ...args) {
        return new Promise((resolve, reject) => {
            Meteor.call(methodName, ...args, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        })
    }
*/



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
                    <p>These are my latest blog posts. You can find my blog on <a href="https://www.medium.com/@Poetkoe" target="_blank">Medium</a>.</p>
                    <ul>
                        {this.state.posts.map((post) => {
                            return <LatestPost post={post} key={post.published} className="latest-posts" />
                        })}
                    </ul>
                    {console.log("UI " + this.state.posts)}
                </div>
            </div>
        )
    }
}
//<p>{this.state.posts}</p>
/*
let latestPosts = this.posts();
console.log(latestPosts);

if (latestPosts === undefined) {
    return(<h2>Loading...</h2>);
}
*/
