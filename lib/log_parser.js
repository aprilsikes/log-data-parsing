var fs = require("fs");

var funcs = {

  prepLogs: function(logs) {
    return logs.split("\n");
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
