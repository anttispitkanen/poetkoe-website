import React, {Component} from 'react';

export default class LatestPost extends Component {

    render() {
        let text = this.props.post.content.substr(61);
        console.log(text);


        return(
            <li className="single-blog-post">
                <h3>{this.props.post.title}</h3>
                {this.props.post.content}
            </li>
        )
    }
}

//<a href={this.props.post.link} target="_blank">Read more</a>
