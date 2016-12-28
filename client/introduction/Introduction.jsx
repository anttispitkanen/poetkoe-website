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
                        I write, play, record, produce and publish all my music myself.
                        I play the guitar, bass and keys as well as sing, rap and occasionally beatbox.
                        I also do all the electronics and programming.
                    </p>


                    <iframe width="560" height="315" src="https://www.youtube.com/embed/VS5YosCbyXM" frameborder="0" allowfullscreen></iframe>

                    <p>
                        You can show support by listening on <a href="https://soundcloud.com/poetkoe"
                        target="_blank">SoundCloud</a> or <a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw"
                        target="_blank">YouTube</a>. Take a peek on <a href="https://www.instagram.com/poetkoe" target="_blank">
                        Instagram</a>, read my blog on <a href="https://www.medium.com/@Poetkoe" target="_blank">Medium</a> or
                        give a thumbs up on <a href="https://www.facebook.com/poetkoemusic"
                        target="_blank">Facebook</a> if you feel like it!
                    </p>
                </div>
            </div>
        )
    }
}
