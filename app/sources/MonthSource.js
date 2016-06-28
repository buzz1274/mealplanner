var MonthActions = require('../actions/MonthActions');

var mockData = [
  { id: 0  }
];

var MonthSource = {
  fetchLocations() {
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          // simulate an asynchronous flow where data is fetched on
          // a remote server somewhere.
          setTimeout(function () {

            // change this to `false` to see the error action being handled.
            if (true) {
              // resolve with some mock data
              resolve(mockData);
            } else {
              reject('Things have broken');
            }
          }, 250);
        });
      },

      local() {
        // Never check locally, always fetch remotely.
        return null;
      },

      success: MonthActions.updateMonth,
      error: MonthActions.monthFailed,
      loading: MonthActions.fetchMonth
    }
  }
};

module.exports = MonthSource;
