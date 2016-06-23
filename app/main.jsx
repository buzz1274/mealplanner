import 'bootstrap-webpack!./styles/bootstrap.config.js';
import './styles/main.css';

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes/routes.jsx';
import Header from './components/header.jsx';

render((routes), document.getElementById('main'));
render((<Header />), document.getElementById('header'));
