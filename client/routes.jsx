import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import Home from './home/Home.jsx';

import Blog from './blog/Blog.jsx';
import SinglePost from './blog/SinglePost.jsx';
import Games from './games/Games.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Home />)
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

FlowRouter.route('/games', {
  action() {
    mount(MainLayout, {
      content: (<Games />)
    })
  }
});
