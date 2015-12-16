import React from 'react';

var days = [];

for(var i = 1; i <= 35; i++) {
  days[i] = {'id': i,
             'date': i};
}

module.exports = React.createClass({
  render: function() {
    return (<div className="col-xs-8 holder">
        <div id="calendar">
          <div className="header">
            <div className="title">
                    <span title="Previous Month" className="pull-left">
                      ««
                    </span>
              November 2015
                    <span title="Next Month" className="pull-right">
                      »»
                    </span>
            </div>
          </div>
          {days.map(this.renderDay)}
        </div>
      </div>
    );
  },
  renderDay: function(day) {
    return (<div key={day.id} className="col-xs-1 calendar_day"
                 onClick={this.handleDayClick.bind(this, day)}>
        <div className="inner">
          {day.date}
        </div>
      </div>
    );
  },
  handleDayClick: function(day) {
    console.log("DAY CLICKED   " + day.date);
  }
});
