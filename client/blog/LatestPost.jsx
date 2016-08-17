import React, {Component} from 'react';

export default class LatestPost extends Component {
    render() {
        return(
            <li className="single-blog-post">
                <h3>{this.props.post.title}</h3>
            </li>
        )
    }
}
