import React from 'react';
import moment from 'moment';

//call ajax request to get current month

module.exports = React.createClass({
  days_in_week: ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
                 'Thursday', 'Friday', 'Saturday'],
  getInitialState: function() {
    var days = [];

    for(var i = 1; i <= 35; i++) {
      days[i] = {'id': i,
                 'date': i};
    }

    return {days: days,
            day: 18,
            date: this.props.date_selected};

  },
  render: function() {
    return (
      <div className="col-xs-8 holder">
        <div id="calendar">
          <div className="header">
            <div className="title">
              <span title="Previous Month" className="pull-left page_prev"
                    onClick={this.handlePrevMonthClick}>
                ««
              </span>
              {moment(this.state.date, 'YYYY-MM-DD').format('MMMM YYYY')}
              <span title="Next Month" className="pull-right page_next"
                    onClick={this.handleNextMonthClick}>
                »»
              </span>
            </div>
          </div>
          {this.days_in_week.map(this.eachDayInWeek)}
          {this.state.days.map(this.eachDay)}
        </div>
      </div>
    );
  },
  eachDayInWeek: function(day) {
    return (
      <div key={day} className="col-xs-1 calendar_day">
        <div className="inner day_of_week">{day}</div>
      </div>
    );
  },
  eachDay: function(day) {
    return (
      <div key={day.id}
           className="col-xs-1 calendar_day calendar_day_day "
           onClick={this.handleDayClick.bind(this, day)}>
        <div className={"inner " +
                        (this.state.day === day.id ? 'selected' : "")}>
          {day.date}
        </div>
      </div>
    );
  },
  handleDayClick: function(day) {
    this.setState({day: day.id});
    console.log(day.id);
    console.log("DAY CLICKED   " + day.date);
  },
  handlePrevMonthClick: function() {
    console.log("PREVIOUS MONTH CLICKED");
  },
  handleNextMonthClick: function() {
    console.log("NEXT MONTH CLICKED");
  }
});
