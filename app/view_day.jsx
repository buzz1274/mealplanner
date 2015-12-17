import React from 'react';
import Calendar from './calendar.jsx';

module.exports = React.createClass({
  render: function() {
    return (
      <div className="col-xs-4 holder">
        <div id="view_day">
          <div className="header">
            <div className="title">{this.props.day}</div>
          </div>
        </div>
      </div>
    );
  }
});
