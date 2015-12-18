import React from 'react';
import moment from 'moment';
import Calendar from './calendar.jsx';


module.exports = React.createClass({
  getInitialState: function() {
    return {date: this.props.date};
  },
  render: function() {
    return (
      <div className="col-xs-4 holder">
        <div id="view_day">
          <div className="header">
            <div className="title">
              {moment(this.state.date, 'YYYY-MM-DD').format('MMMM Do YYYY')}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
