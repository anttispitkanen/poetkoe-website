import React, {Component} from 'react';

import Navigation from '../navigation/Navigation.jsx';
import Banner from './Banner.jsx';
import Introduction from '../introduction/Introduction.jsx';
import Soundcloud from '../socialmedia/Soundcloud.jsx';
import Youtube from '../socialmedia/Youtube.jsx';
import Facebook from '../socialmedia/Facebook.jsx';
import Instagram from '../socialmedia/Instagram.jsx';
import Coding from '../coding/Coding.jsx';
import Footer from '../footer/Footer.jsx';

import HatGlasses from '../fillers/HatGlasses';
import MusaCorner from '../fillers/MusaCorner';
import Muumi from '../fillers/Muumi';
import Statue from '../fillers/Statue';
import Teddy from '../fillers/Teddy';



export default class Home extends Component {

    render() {
        return(

            <div className="content-wrapper">
                <Navigation />

                <Banner />

                <Introduction />

                <Statue />

                <Soundcloud />

                <Teddy />

                <Youtube />

                <Muumi />

                <Facebook />

                <MusaCorner />

                <Instagram />

                <HatGlasses />

                <Coding />

                <Footer />

            </div>
        )
    }
}
