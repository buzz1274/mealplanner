import React from 'react';
import ViewDay from './view_day.jsx';
import Calendar from './calendar.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div id="app">
        <ViewDay />
        <Calendar />
      </div>
    );
  }
}
