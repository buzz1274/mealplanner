import React from 'react';
import ReactDom from 'react-dom';
import ViewDay from './view_day.jsx';
import Calendar from './calendar.jsx';

ReactDom.render(
  <div id="app">
    <ViewDay />
    <Calendar />
  </div>,
  document.getElementById('main')
);
