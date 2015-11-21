import 'bootstrap-webpack!./styles/bootstrap.config.js';
import './styles/main.css';

import React from 'react';
import App from './app.jsx';

main();

function main() {
  const app = document.createElement('div');

  $('#main').html(app);
  React.render(<App />, app);

}

