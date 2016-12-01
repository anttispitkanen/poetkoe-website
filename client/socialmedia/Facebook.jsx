import React, {Component} from 'react';

export default class Facebook extends Component {

    render() {
        return(
            <div id="facebook" className="facebook clearfix">

                <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fpoetkoemusic%2Fvideos%2F654563564691379%2F&show_text=0&width=560" width="560" height="315" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>

                <div className="facebook-text">
                    <h2><a href="https://www.facebook.com/poetkoemusic" target="_blank"><i className="fa fa-facebook-official"></i> Facebook</a></h2>
                    <p>
                        I share my music through Facebook.
                        There is also some exclusive content. Like this video of the time I jammed along to The Last Baron by Mastodon.
                    </p>
                    <p><a href="https://www.facebook.com/poetkoemusic" target="_blank">Wow, such content, much exclusive!</a></p>
                </div>
            </div>
        )
    }
}
