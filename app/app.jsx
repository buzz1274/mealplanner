import React from 'react';
import ReactDom from 'react-dom';
import ViewDay from './view_day.jsx';
import Calendar from './calendar.jsx';
import moment from 'moment';

var today = moment().format('YYYY-MM-DD');

ReactDom.render(
  <div id="app">
    <Calendar day_selected={today}/>
    <ViewDay day={today} />
  </div>,
  document.getElementById('main')
);
