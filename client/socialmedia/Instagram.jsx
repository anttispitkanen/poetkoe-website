import React, {Component} from 'react';

export default class Instagram extends Component {

    //this makes the video autoplay if it's scrolled to and > 0.1 of it is showing,
    //otherwise it's paused
    checkScroll() {
        let instavideo = document.getElementById("instavideo");

        let x = instavideo.offsetLeft,
        y = instavideo.offsetTop,
        w = instavideo.offsetWidth,
        h = instavideo.offsetHeight,
        r = x + w, //right
        b = y + h, //bottom
        visibleX,
        visibleY,
        visible;

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > 0.1) {
            instavideo.play();
        } else {
            instavideo.pause();
        }
    }


    //this is for toggling the video to play/pause by clicking
    togglePlaying() {
        let video = document.getElementById('instavideo');
        !video.paused ? video.pause() : video.play();
    }



    render() {
        return(
            <div id="instagram" className="instagram clearfix">

                <video id="instavideo" preload="auto" loop onClick={this.togglePlaying}>
                    <source src="videos/dips.webm" type="video/webm" />
                    <source src="videos/dips.mp4" type="video/mp4" />
                </video>

                <div className="instagram-text">
                    <h2><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></h2>
                    <p>
                        My Instagram is mostly about music and exercise (calisthenics and mobility work are my favorites).
                        Maisa the cat has found her way to many pictures as well.
                    </p>
                    <p>I also like nature, coffee, Moomin, cartoons and comic strips.</p>
                    <p><a href="https://www.instagram.com/poetkoe" target="_blank">There's cats and stuff!</a></p>
                </div>

                {window.addEventListener('scroll', this.checkScroll, false)}
                {window.addEventListener('resize', this.checkScroll, false)}

            </div>
        )
    }
}
