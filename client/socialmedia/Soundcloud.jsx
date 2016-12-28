import React, {Component} from 'react';

export default class Soundcloud extends Component {
    render() {
        return(
            <div id="soundcloud" className="soundcloud clearfix">

                <iframe width="100%" height="450" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/299818721&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

                <div className="soundcloud-text">
                    <h2><a href="https://www.soundcloud.com/poetkoe" target="_blank"><i className="fa fa-soundcloud"></i> SoundCloud</a></h2>
                    <p>
                        Most of my original music can be found on my SoundCloud.
                    </p>

                    <p>
                        Like this track that captures the atmosphere and beauty of a
                        cold winter day with melancholy but hopeful melodies and growling bass.
                        Don't take my word for it when you can listen yourself!
                    </p>

                    <p><a href="https://www.soundcloud.com/poetkoe" target="_blank">Listen to awesome music here!</a></p>
                </div>
            </div>
        )
    }
}
