import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header className="banner">
      <nav>
        <div id="menu-icon" className="menu-icon"><i id="menu-icon-toggle" className="fa fa-bars"></i></div>
        <ul id="main-navigation" className="main-navigation">

          <a href="/"><li>Home</li></a>
          <a href="/bio"><li>Bio</li></a>
          <a href="/music"><li>Music</li></a>
          <a href="/blog"><li>Blog</li></a>
          <a href="/games"><li>Games</li></a>
        </ul>

      </nav>

      <div className="header-logo"><a href="/"><img src="images/poetkoe-white.png" /></a></div>

    </header>

    <main>
      {content}
    </main>
    <footer className="clearfix">
      <div className="footer-links">
        <ul>
          <li><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank">YouTube</a></li>
          <li><a href="https://soundcloud.com/poetkoe" target="_blank">SoundCloud</a></li>
          <li><a href="https://www.facebook.com/poetkoemusic" target="_blank">Facebook</a></li>
          <li><a href="https://www.instagram.com/poetkoe/" target="_blank">Instagram</a></li>
        </ul>
      </div>

      <div className="copyright-and-contact">
        © 2016 <a href="https://github.com/anttispitkanen" target="_blank">Antti Pitkänen</a> <br/>
        <a href="mailto:poetkoeofficial@gmail.com">poetkoeofficial@gmail.com</a>
      </div>

    </footer>

  </div>


)
