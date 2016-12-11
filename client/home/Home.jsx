import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Banner from './Banner.jsx';
import Introduction from '../introduction/Introduction.jsx';
import Soundcloud from '../socialmedia/Soundcloud.jsx';
import Youtube from '../socialmedia/Youtube.jsx';
import BlogLatest from '../blog/BlogLatest.jsx';
import Facebook from '../socialmedia/Facebook.jsx';
import Instagram from '../socialmedia/Instagram.jsx';
import Coding from '../coding/Coding.jsx';

import Face from '../fillers/Face';
import GigPoetkoe from '../fillers/GigPoetkoe';
import HatGlasses from '../fillers/HatGlasses';
import MusaCorner from '../fillers/MusaCorner';
import Muumi from '../fillers/Muumi';
import Statue from '../fillers/Statue';
import Teddy from '../fillers/Teddy';



export default class Home extends Component {

    render() {
        return(

            <div className="content-wrapper">
                <Banner />

                <Introduction />

                <Statue />

                <Soundcloud />

                <Teddy />

                <Youtube />

                <GigPoetkoe />

                <Instagram />

                <Muumi />

                <BlogLatest />

                <MusaCorner />

                <Facebook />

                <HatGlasses />

                <Coding />

            </div>
        )
    }
}
