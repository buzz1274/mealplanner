var alt = require('../alt');

class MonthActions {
  updateMonth(month) {
    this.dispatch(month);
  }

  fetchMonth() {
    this.dispatch();
  }

  monthFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

}

module.exports = alt.createActions(MonthActions);
