import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Home from '../views/home.jsx';
import Login from '../views/login.jsx';
import Planner from '../views/planner.jsx';
import Register from '../views/register.jsx';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="login" component={Login}/>
    <Route path="register" component={Register}/>
    <Route path="planner" component={Planner}/>
  </Router>
)

export default routes
