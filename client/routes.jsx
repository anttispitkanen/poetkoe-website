import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import Home from './home/Home.jsx';
import Bio from './bio/Bio.jsx';
import Music from './music/Music.jsx';
import Blog from './blog/Blog.jsx';
import SinglePost from './blog/SinglePost.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Home />)
    })
  }
});

FlowRouter.route('/bio', {
  action() {
    mount(MainLayout, {
      content: (<Bio />)
    })
  }
});

FlowRouter.route('/music', {
  action() {
    mount(MainLayout, {
      content: (<Music />)
    })
  }
});

FlowRouter.route('/blog', {
  action() {
    mount(MainLayout, {
      content: (<Blog />)
    })
  }
});

FlowRouter.route('/blog/:id', {
  action(params) {
    mount(MainLayout, {
      content: (<SinglePost id={params.id} />)
    })
  }
});
