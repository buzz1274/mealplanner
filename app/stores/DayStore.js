var alt = require('../alt');
var MonthActions = require('../actions/MonthActions');
var MonthSource = require('../sources/MonthSource');

class MonthStore {
  constructor() {
    this.days = [];
    this.errorMessage = null;
  }
}

module.exports = alt.createStore(MonthStore, 'MonthStore');
