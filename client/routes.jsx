import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout.jsx';
import Home from './home/Home.jsx';
import Games from './games/Games.jsx';


FlowRouter.route('/', {
  action() {
    mount(MainLayout, {
      content: (<Home />)
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
