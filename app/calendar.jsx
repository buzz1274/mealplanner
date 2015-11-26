import React from 'react';

var days = [];

for(var i = 1; i <= 35; i++) {
  days[i] = {'key': i,
             'date': i};
}

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.viewDay = this.viewDay.bind(this);

  }
  render() {
    return (<div className="col-xs-8 holder">
              <div id="calendar" onClick={this.viewDay}>
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
  }
  renderDay(day) {
    return (<div className="col-xs-1 calendar_day">
              <div className="inner">
                {day.date}
              </div>
            </div>
    );
  }
  viewDay() {
    alert("HERE");
  }
}
