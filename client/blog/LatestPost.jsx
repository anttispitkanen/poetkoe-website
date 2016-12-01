import React, {Component} from 'react';

export default class LatestPost extends Component {

    render() {
        //there's always the same html tags in the beginning of the result
        //text starts from index 61
        let text = this.props.post.content.substr(61);

        //text ends either to a tag ("<") or an ampersand ("&"),
        //let's find out which comes first and chop there
        //this obviously fails to function properly if the text contains an ampersand
        let firstTagOpens = text.indexOf("<");
        let textEnds = text.indexOf("&") > 0 ? text.indexOf("&") : 1000; //dumb hack to counter the negative index
        let smallerOfTheTwo = firstTagOpens < textEnds ? firstTagOpens : textEnds;

        let croppedText = text.substr(0, smallerOfTheTwo);

        //if last character is a period (full sentence) do nothing, if it's not (sentence chopped)
        //add three dots to end
        if (croppedText[croppedText.length-1] !== ".") {
            croppedText += "...";
        }

        //date in form of "Sun Sep 25 2016 16:44:09 GMT+0300 (EEST)"
        //so lets start from index 4
        console.log(this.props.post.published);
        let dateString = this.props.post.published.toString().substr(4);

        //we want the "Sep 25 2016" part
        // up to the index of the first ":" and
        //a few steps back from there
        let indexOfFirstColon = dateString.indexOf(":");
        let formattedDate = dateString.substr(0, indexOfFirstColon-3);


        return(
            <li className="single-blog-post">
                <h3><a href={this.props.post.link} target="_blank">{this.props.post.title}</a></h3>
                <p>{croppedText}</p>
                <a className="read-more" href={this.props.post.link} target="_blank">Read more.</a>
                <span className="timestamp">{formattedDate}</span>
            </li>
        )
    }
}
