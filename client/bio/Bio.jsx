import React, {Component} from 'react';

export default class Bio extends Component {

  addContent() {
    document.getElementById('bio-content').innerHTML='<object type="text/html" data="/texts/bio.html"></object>';
  }

  render() {

    return(
      <div className="content-wrapper">
        <div className="bio-wrapper">
          <h1>Bio</h1>
          <iframe className="bio" src="/texts/bio.md"></iframe>
          <article itemprop="/texts/bio.md"></article>
        </div>
      </div>
    )
  }
}
