import React, {Component} from 'react';

export default class Banner extends Component {

    render() {
        return(
            <header className="banner" id="home">

                <div id="spinner" className="spinner"></div>
                <div className="header-logo"></div>
                <p className="header-slogan">ARTIST /// SONGWRITER /// PRODUCER</p>

            </header>
        )
    }
}
