import React from 'react';
import ViewDay from './view_day.jsx';
import moment from 'moment';

//call ajax request to get current month

module.exports = React.createClass({
  days: [],
  days_in_week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday', 'Saturday'],
  getInitialState: function() {
    for(var i = 1; i <= 35; i++) {
      this.days[i] = {'id': i,
                      'date': i};
    }
    return this;
  },
  render: function() {
    return (
      <div className="col-xs-8 holder">
        <div id="calendar">
          <div className="header">
            <div className="title">
              <span title="Previous Month" className="pull-left page_prev">
                ««
              </span>
              {moment(this.props.day_selected, 'YYYY-MM-DD').format('MMMM YYYY')}
              <span title="Next Month" className="pull-right page_next">
                »»
              </span>
            </div>
          </div>
          {this.days_in_week.map(this.renderDayInWeek)}
          {this.days.map(this.renderDay)}
        </div>
      </div>
    );
  },
  renderDayInWeek: function(day) {
    return (
      <div key={day} className="col-xs-1 calendar_day">
        <div className="inner day_of_week">{day}</div>
      </div>
    );
  },
  renderDay: function(day) {
    return (
      <div key={day.id} className="col-xs-1 calendar_day calendar_day_day"
           onClick={this.handleDayClick.bind(this, day)}>
        <div className="inner">
          {day.date}
        </div>
      </div>
    );
  },
  handleDayClick: function(day) {
    ViewDay.setState({day: day.date});
    console.log("DAY CLICKED   " + day.date);
  }
});
