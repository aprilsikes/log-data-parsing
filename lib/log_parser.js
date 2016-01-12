var fs = require("fs");

var funcs = {

  prepLogs: function (logs) {
    return logs.split("\n");
  },

  getDates: function (logs) {
    var _this = this;
    logs = this.prepLogs(logs);
    var dates = logs.map(function (log) {
      return  _this.removeCruft(log);
    })
    return _this.removeDuplicates(dates);
  },

  removeDuplicates: function (dates) {
    return dates.filter(function (date, i) {
      return dates.indexOf(date) == i;
    });
  },

  removeCruft: function (log) {
    if(log.length > 0){
      return log.split(',')[1].split('[')[1].split('T')[0];
    } else {
      return '';
    }
  },

  // var array = [];
  //   logs.map(function (log) {
  //     array.push(log.split("[")[1].split("T")[0]);
  //     console.log(array);
  //     return array;
  //   })
  // },

  showDates: function (dates) {
    var results = '';
    dates.unshift("* What are all the dates the log covers?");
    for (var i = 0; i < dates.length; i++) {
      dates[i] += '\n'
      results  += dates[i];
    }
    return results;
  }

}


fs.readFile('./data/log.log', function(err, data) {
  if (err) throw err;
  var logs = data.toString();

  // When your tests are passing, uncomment this code and run `node lib/log_parser.js` from command line to confirm success.
  var dates = funcs.getDates(logs);
  console.log(funcs.showDates(dates));
});

module.exports = funcs;
