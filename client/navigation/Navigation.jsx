import React from 'react';

//let ypos = 0; //to keep track of window top postion for scroll animation

export default class Navigation extends React.Component {

    constructor() {
        super();
        this.state = {
            menuOpen: false
        };
    }
/*
    componentDidMount() {

        window.addEventListener('scroll', () => {
            ypos = window.scrollY;
        });

        requestAnimationFrame(this.animateHamburger);
    }

    animateHamburger() {
        let hamburger = document.getElementById('menu-icon-toggle');

        //requestAnimationFrame(Navigation.animateHamburger);

        let top = ypos / 3;
        hamburger.style.transform = `rotate(${top}deg)`;
    }
*/



//    componentDidUpdate() {
        /*
        if (document.getElementById('main-navigation').classList.contains("main-navigation-showing")) {
            document.documentElement.onclick = () => {
                document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
            }
        }
        */
/*
        console.log(this.state.menuOpen);

        if (this.state.menuOpen) {
            document.documentElement.onclick = () => {
                document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
            }
            this.setState( { menuOpen: false } );
        }
    }
*/

    //click at the hamburger menu icon
    toggleNavigationShowing() {
        document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
        this.setState( { menuOpen: !this.state.menuOpen } );
    }

    //closes the navigation dropdown when a list item is clicked
    closeNavigationOnClick() {
        document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
        this.setState( { menuOpen: !this.state.menuOpen } );
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

                <div id="menu-icon" onClick={this.toggleNavigationShowing.bind(this)} className="menu-icon">
                    <i id="menu-icon-toggle" className="fa fa-bars"></i>
                </div>

                <ul id="main-navigation" onClick={this.closeNavigationOnClick.bind(this)} className="main-navigation">

                    <a href="#home"><li>Home</li></a>
                    <a href="#soundcloud"><li>Music</li></a>
                    <a href="#blog"><li>Blog</li></a>
                    <a href="#facebook"><li>Some</li></a>
                </ul>

            </nav>
        )
    }

}
