import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Session} from 'meteor/session';
import LatestPost from './LatestPost.jsx';


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
    }


    posts(self) {
        Meteor.call("fetchLatestBlogposts", function(err, result) {
            if (err) {
                console.log("error in client: " + err);
            }
            if (result) {
                self.setState({posts: result});
            } else {
                console.log("no result found");
            }
        });
    }



    render() {
        return(
            <div className="blog-latest" id="blog">
                <div className="blog-latest-text">
                    <h2><a href="https://www.medium.com/@Poetkoe" target="_blank"><i className="fa fa-pencil-square-o"></i> Blog</a></h2>
                    <p>
                        I occasionally write a music-themed blog
                        on <a href="https://www.medium.com/@Poetkoe" target="_blank">Medium</a>.
                        These are the latest posts.
                    </p>
                </div>

                <ul className="latest-posts">
                    {this.state.posts.map((post) => {
                        return <LatestPost post={post} key={post.published} />
                    })}
                </ul>
            </div>
        )
    }
}
