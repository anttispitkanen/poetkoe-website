import React, {Component} from 'react';

export default class Introduction extends Component {
  render() {
    return(
      <div id="introduction" className="introduction clearfix">
        <img className="homepage-pic" src="images/SmilePoetkoe3.png" />
        <div className="introduction-text">
          <h2>A wild Poetkoe has appeared!</h2>
          <p>
            I'm Antti "Poetkoe" Pitkänen, an independent artist, songwriter, multi-instrumentalist and producer from Tampere, Finland.
          </p>

          <p>
            I write, play, record, produce and publish all my music myself. I enjoy playing the guitar, bass and keys as well as singing and rapping.
            I also do all the electronics and programming. I don't play drums but I try to make up for it by beatboxing when necessary.
          </p>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/UsjgVvDZ2Kk" frameborder="0" allowfullscreen></iframe>

          <p>
            Doing everything myself has its advantages – I get to have all the fun of playing every instrument!
            As Poetkoe I can also make any kinds of artistic decisions I feel like making.
            I listen to all kinds of music, so I find it natural not to limit myself to any single genre when making music.
          </p>

          <p>
            You can show support by listening on <a href="https://soundcloud.com/poetkoe"
            target="_blank">SoundCloud</a> or <a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw"
            target="_blank">YouTube</a>. Or give a thumbs up on <a href="https://www.facebook.com/poetkoemusic"
            target="_blank">Facebook</a> if you feel like it!
          </p>
        </div>
      </div>
    )
  }
}
