import React from 'react';

export default class Footer extends React.Component {

    render() {
        return(
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
        )
    }

}
