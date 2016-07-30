import React, {Component} from 'react';

export default class Soundcloud extends Component {
  render() {
    return(
      <div id="soundcloud" className="soundcloud clearfix">

        <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262604566&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

        <div className="soundcloud-text">
          <h2><a href="https://www.soundcloud.com/poetkoe" target="_blank"><i className="fa fa-soundcloud"></i> SoundCloud</a></h2>
          <p>
            Most of my original music can be found on my SoundCloud.
          </p>
          <p>
            Like this epic track thats starts with ambient synth soloing,
            climbs to a screaming guitar part and cools down before going to
            a harmonica melody to wrap everything together.
            Just listen if you don't believe me!
          </p>
          <p>
            On the cover you can see Bolt of the awesome <a href="https://www.instagram.com/boltandkeel/"
            target="_blank">Bolt and Keel</a> since they were kind enough to let me use their picture.
          </p>
          <p>Find the rest of my music <a href="https://www.soundcloud.com/poetkoe" target="_blank">here</a>.</p>
        </div>
      </div>
    )
  }
}
