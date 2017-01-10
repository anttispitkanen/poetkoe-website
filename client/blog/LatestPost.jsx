import React, {Component} from 'react';

export default class LatestPost extends Component {

    render() {

        return(
            <li className="single-blog-post">
                <h3><a href={this.props.post.link} target="_blank">{this.props.post.title}</a></h3>
                <p>{this.props.post.formattedText}</p>
                <a className="read-more" href={this.props.post.link} target="_blank">Read more</a>
                <span className="timestamp">{this.props.post.formattedDate}</span>
            </li>
        )

    }
}
