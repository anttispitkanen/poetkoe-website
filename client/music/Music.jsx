import React, {Component} from 'react';

export default class Music extends Component {
  render() {
    return(
      <div className="content-wrapper">
        <h1>Music</h1>
        <iframe width="560" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262604566&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ZEhKRjrar6I" frameborder="0" allowfullscreen></iframe>
        <iframe width="560" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/240944272&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>
      </div>
    )
  }
}
