import React from 'react';
import {browserHistory} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div id="welcome">
          <a onClick={() => {browserHistory.push('/login')}}>Login</a>
        </div>
        <div id="header_content">
          <h1>
            <a onClick={() => { browserHistory.push('/planner')}}>
              MealPlanner
            </a>
          </h1>
        </div>
      </div>
    );
  }
});
