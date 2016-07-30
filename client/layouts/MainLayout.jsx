import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">

    <nav className="clearfix">

      <ul className="social-media-icon-links">
        <li><a href="https://www.soundcloud.com/poetkoe" target="_blank"><i className="fa fa-soundcloud"></i></a></li>
        <li><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank"><i className="fa fa-youtube"></i></a></li>
        <li><a href="https://www.facebook.com/poetkoemusic" target="_blank"><i className="fa fa-facebook-official"></i></a></li>
        <li><a href="https://www.instagram.com/poetkoe" target="_blank"><i className="fa fa-instagram"></i></a></li>
      </ul>

      <div id="menu-icon" className="menu-icon"><i id="menu-icon-toggle" className="fa fa-bars"></i></div>
      <ul id="main-navigation" className="main-navigation">

        <a href="/"><li>Home</li></a>
        <a href="/blog"><li>Blog</li></a>
        <a href="/games"><li>Games</li></a>
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
