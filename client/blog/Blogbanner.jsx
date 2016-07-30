import React, {Component} from 'react';


export default class Blogbanner extends Component {
  render() {
    return(
      <header className="blog-banner">

        <div className="header-logo"><a href="/"><img src="images/poetkoe-white.png" /></a></div>
        <p className="header-slogan">ARTIST /// SONGWRITER /// PRODUCER</p>

      </header>
    )
  }
}
