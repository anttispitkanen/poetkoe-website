import React, {Component} from 'react';
import {render} from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Banner from './Banner.jsx';
import Introduction from '../introduction/Introduction.jsx';
import Soundcloud from '../socialmedia/Soundcloud.jsx';
import Youtube from '../socialmedia/Youtube.jsx';
import BlogLatest from '../blog/BlogLatest.jsx';
import Facebook from '../socialmedia/Facebook.jsx';
import Instagram from '../socialmedia/Instagram.jsx';
import Coding from '../coding/Coding.jsx';


export default class Home extends Component {

  render() {
    return(

      <div className="content-wrapper">
        <Banner />

        <Introduction />

        <Soundcloud />

        <Youtube />

        <Instagram />

        <BlogLatest />

        <Facebook />

        <Coding />

      </div>
    )
  }
}
