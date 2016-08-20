import React, {Component} from 'react';

export default class Instagram extends Component {

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



  render() {
    return(
      <div id="instagram" className="instagram clearfix">
        <video id="instavideo" preload="auto" autoplay loop>
          <source src="videos/dips.webm" type="video/webm" />
          <source src="videos/dips.mp4" type="video/mp4" />
        </video>

        <div className="instagram-text">
          <h2><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i> Instagram</a></h2>
          <p>
            My posts on Instagram are mainly about well-being and feeling good.
            That means it's mostly about music, exercise (calisthenics and mobility work are my favorites) and cats.
            The cat you can see in most pics is Maisa, she lives with my parents.
          </p>
          <p>I also like coffee, bunnies, Moomin, cartoons and web comics.</p>
          <p><a href="https://www.instagram.com/poetkoe" target="_blank">There's cats and stuff!</a></p>
        </div>

        {window.addEventListener('scroll', this.checkScroll, false)}
        {window.addEventListener('resize', this.checkScroll, false)}

      </div>
    )
  }
}
