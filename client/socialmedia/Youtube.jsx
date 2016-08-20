import React, {Component} from 'react';


export default class Youtube extends Component {


  render() {
    return(
      <div id="youtube" className="youtube clearfix">
        <div className="youtube-text">
          <h2><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank"><i className="fa fa-youtube"></i> YouTube</a></h2>
          <p>My YouTube channel is focused more on live recorded versions of my songs.</p>
          <p>There is also some exclusive content. Like this rap anthem that I made for the basketball team Ponteva from Hyvinkää, my original home town.</p>
          <p><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank">See cool videos here!</a></p>
        </div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZEhKRjrar6I" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }

}
