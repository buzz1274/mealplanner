import React from 'react';
import {browserHistory} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div id="header_content">
        <h1><a onClick={this.handleHomeClick}>MealPlanner</a></h1>
      </div>
    );
  },
  handleHomeClick() {
    browserHistory.push('/');
  }
});
