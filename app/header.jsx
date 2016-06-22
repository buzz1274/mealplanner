import React from 'react';
import {browserHistory} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <div id="welcome">
          <a onClick={this.handleLoginClick}>Login</a>
        </div>
        <div id="header_content">
          <h1><a onClick={this.handleHomeClick}>MealPlanner</a></h1>
        </div>
      </div>
    );
  },
  handleHomeClick() {
    browserHistory.push('/planner');
  },
  handleLoginClick() {
    browserHistory.push('/login');
  }
});
