import React from 'react';

export const MainLayout = ({content}) => (
  <div className="main-layout">
    <header>
      <nav>
        <div></div>

        <div><a href="/">Home</a></div>
        <div><a href="/bio">Bio</a></div>
        <div><a href="/music">Music</a></div>
        <div><a href="/blog">Blog</a></div>

        <img src="images/poetkoe.png" />
      </nav>
    </header>
    <main>
      {content}
    </main>
    <footer>
      <ul>
        <li><a href="https://www.youtube.com/channel/UCsKV98VedO0epGqJPjeqoQw" target="_blank">YouTube</a></li>
        <li><a href="https://soundcloud.com/poetkoe" target="_blank">SoundCloud</a></li>
        <li><a href="https://www.facebook.com/poetkoemusic" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/poetkoe/" target="_blank">Instagram</a></li>
      </ul>
    </footer>
  </div>
)
