import React from 'react';
import ReactDom from 'react-dom';
import Day from './day.jsx';
import Calendar from './calendar.jsx';
import moment from 'moment';

var today = moment().format('YYYY-MM-DD');

ReactDom.render(
  <div id="app">
    <Calendar date_selected={today}/>
    <Day date={today} />
  </div>,
  document.getElementById('main')
);
