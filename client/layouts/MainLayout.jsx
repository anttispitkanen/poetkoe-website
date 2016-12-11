import React from 'react';

//check for touchscreen
let touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
//if touchscreen, no hover effect
if (touchsupport) {
    document.documentElement.className += " no-hover";
}



export const MainLayout = ({content}) => (
    <div className="main-layout">

        <nav className="clearfix">

            <ul className="social-media-icon-links">
                <li><a href="https://www.soundcloud.com/poetkoe" target="_blank"><i className="fa fa-soundcloud"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank"><i className="fa fa-youtube"></i></a></li>
                <li><a href="https://www.medium.com/@Poetkoe" target="_blank"><i className="fa fa-medium"></i></a></li>
                <li><a href="https://www.facebook.com/poetkoemusic" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
                <li><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i></a></li>
            </ul>

            <div id="menu-icon" className="menu-icon"><i id="menu-icon-toggle" className="fa fa-bars"></i></div>
            <ul id="main-navigation" className="main-navigation">

                <a href="#home"><li>Home</li></a>
                <a href="#soundcloud"><li>Music</li></a>
                <a href="#blog"><li>Blog</li></a>
            </ul>

        </nav>

        <main>
            {content}
        </main>
        <footer className="clearfix">
            <div className="footer-links">
                <ul className="clearfix">
                    <li><a href="https://www.soundcloud.com/poetkoe" target="_blank"><i className="fa fa-soundcloud"></i></a></li>
                    <li><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank"><i className="fa fa-youtube"></i></a></li>
                    <li><a href="https://www.medium.com/@Poetkoe" target="_blank"><i className="fa fa-medium"></i></a></li>
                    <li><a href="https://www.facebook.com/poetkoemusic" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
                    <li><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i></a></li>
                </ul>
            </div>

            <div className="copyright-and-contact">
                © 2016 <a href="https://github.com/anttispitkanen" target="_blank">Antti Pitkänen</a> <br/>
                <a href="mailto:poetkoeofficial@gmail.com">poetkoeofficial@gmail.com</a>
            </div>

        </footer>

    </div>


)
