import React from 'react';
import {render, ReactDom} from 'react-dom';
import {Router, Route, Link, browserHistory} from 'react-router'

import Header from './header.jsx';
import Day from './day.jsx';
import Calendar from './calendar.jsx';
import Home from './home.jsx';
import Login from './views/login.jsx';
import Register from './register.jsx';
import moment from 'moment';

var today = moment().format('YYYY-MM-DD');

const App = React.createClass({
  render: function () {
    return (<div id="app">
      <Calendar date_selected={today} />
      <Day date={today} />
    </div>)
  }
});

render((
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
      <Route path="planner" component={App}/>
    </Router>
  ), document.getElementById('main'))

render((<Header />), document.getElementById('header'));
