import React from 'react';

export default class Navigation extends React.Component {

    //click at the hamburger menu icon
    toggleNavigationShowing() {
        document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
    }

    //closes the navigation dropdown when a list item is clicked
    closeNavigationOnClick() {
        document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
    }

    render() {
        return(
            <nav className="clearfix">

                <ul className="social-media-icon-links">
                    <li><a href="https://www.soundcloud.com/poetkoe" target="_blank"><i className="fa fa-soundcloud"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.medium.com/@Poetkoe" target="_blank"><i className="fa fa-medium"></i></a></li>
                    <li><a href="https://www.facebook.com/poetkoemusic" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
                    <li><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i></a></li>
                </ul>

                <div id="menu-icon" onClick={this.toggleNavigationShowing} className="menu-icon">
                    <i id="menu-icon-toggle" className="fa fa-bars"></i>
                </div>

                <ul id="main-navigation" onClick={this.closeNavigationOnClick} className="main-navigation">

                    <a href="#home"><li>Home</li></a>
                    <a href="#soundcloud"><li>Music</li></a>
                    <a href="#blog"><li>Blog</li></a>
                </ul>

            </nav>
        )
    }

}
