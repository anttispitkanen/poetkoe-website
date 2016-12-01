import React, {Component} from 'react';

export default class Banner extends Component {
  render() {
    return(
      <header className="banner" id="Home">

        <div className="header-logo"><img src="images/poetkoe-white.png" /></div>
        <p className="header-slogan">ARTIST /// SONGWRITER /// PRODUCER</p>

      </header>
    )
  }
}
