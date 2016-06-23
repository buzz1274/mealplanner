import React from 'react';
import Day from '../components/day.jsx';
import Calendar from '../components/calendar.jsx';
import moment from 'moment';

var today = moment().format('YYYY-MM-DD');

export default class Planner extends React.Component {

  render() {
    return (<div id="app">
      <Calendar date_selected={today} />
      <Day date={today} />
    </div>)
  }

}
