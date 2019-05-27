import { configure } from '@storybook/react';

const req = require.context('../src/stories/', true, /.js$/)

function loadStories() {
  // Always load index first
  require('../src/stories/index');

  req.keys().forEach(req);
}

configure(loadStories, module);
