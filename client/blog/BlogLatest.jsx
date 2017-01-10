import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import LatestPost from './LatestPost.jsx';


export default class BlogLatest extends TrackerReact(Component) {
    constructor() {
        super();
        this.state = {
            latestPosts: [],
            allPosts: []
        };
    }

    componentDidMount() {
        let self = this;
        this.posts(self);
        this.fetchRestOfBlogposts(self);
    }

    //hide the spinner from home page when all the latest posts have loaded and rendered
    componentDidUpdate() {
        //hide the spinner when the first three posts have loaded
        if (this.state.latestPosts.length >= 3) {
            document.getElementById('spinner').classList.add('hidden');
        }
    }


    posts(self) {
        Meteor.call('fetchLatestBlogposts', function(err, result) {
            if (err) {
                console.log('error in client: ' + err);
            }
            if (result) {
                self.setState( { latestPosts: result } );
            } else {
                console.log('no result found');
            }
        });
    }

    fetchRestOfBlogposts(self) {
        Meteor.call('fetchRestOfBlogposts', (err, result) => {
            if (err) { console.log(err); }
            if (result) {
                self.setState( { allPosts: result } );
            } else {
                console.log('no results found');
            }
        })
    }

    appendPosts() {
        let postsToAppend = this.state.latestPosts;
        let postsLeft = this.state.allPosts;

        //append 3 posts, or if there are less, all of them
        let numPostsToAppend = this.state.allPosts.length < 3 ? this.state.allPosts.length : 3;

        for (let i = 0; i < numPostsToAppend; i++) {
            postsToAppend.push(postsLeft.shift());
        }

        this.setState( { latestPosts: postsToAppend } );
        this.setState( { allPosts: postsLeft } );

        //hide the "show more posts" when there are no more to show
        if (this.state.allPosts.length < 1) {
            document.getElementById('show-more-posts').classList.add('hidden');
        }
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
                    {this.state.latestPosts.map((post) => {
                        return <LatestPost post={post} key={post.postID} />
                    })}

                    <li id="show-more-posts" className="show-more-posts">
                        <span className="show-more-posts-click" onClick={this.appendPosts.bind(this)}>
                            Show more posts
                        </span>

                    </li>
                </ul>

            </div>
        )
    }
}
