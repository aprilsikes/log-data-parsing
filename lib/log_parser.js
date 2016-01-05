var fs = require("fs");

var funcs = {

  prepLogs: function(logs) {
    return logs.split("\n");
  },

  getDates: function(logs) {
    logs = this.prepLogs(logs);
    var dates = logs.map(function (log) {
      return log.split("[")[1].split("T")[0];
    })
    return this.removeDuplicates(dates);
  },

  removeDuplicates: function (dates) {
    return dates.filter(function (date, i) {
      return dates.indexOf(date) == i;
    })
  }

}


fs.readFile('./data/log.log', function(err, data) {
  if (err) throw err;
  var logs = data.toString();
  // When your tests are passing, uncomment this code and run `node lib/log_parser.js` from command line to confirm success.
  // var dates = funcs.getDates(logs);
  // console.log(funcs.showDates(dates));
});

module.exports = funcs;
