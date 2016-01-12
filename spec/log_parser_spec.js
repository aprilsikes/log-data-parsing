var parser = require('../lib/log_parser');

describe('Parses dates from logs', function () {
  var logs = 'D, [2014-05-10T14:48:19.093626 #85971] DEBUG -- : maximize\n' +
  'I, [2014-05-11T14:48:19.093737 #85971]  INFO -- : benchmark vertical\n' +
  'D, [2014-05-10T14:48:19.093772 #85971] DEBUG -- : monetize turn-key\n' +
  'I, [2014-05-12T14:48:19.093800 #85971]  INFO -- : mars volta\n' +
  'I, [2014-05-10T14:48:19.093800 #85971]  INFO -- : innovate real-time';

  it('preps log data into an array of lines', function () {
    var expected = [
      'D, [2014-05-10T14:48:19.093626 #85971] DEBUG -- : maximize',
      'I, [2014-05-11T14:48:19.093737 #85971]  INFO -- : benchmark vertical',
      'D, [2014-05-10T14:48:19.093772 #85971] DEBUG -- : monetize turn-key',
      'I, [2014-05-12T14:48:19.093800 #85971]  INFO -- : mars volta',
      'I, [2014-05-10T14:48:19.093800 #85971]  INFO -- : innovate real-time'
    ]

    expect(parser.prepLogs(logs)).toEqual(expected);
  })

  it('extracts array of unique log dates', function () {
    var expected = [ '2014-05-10', '2014-05-11', '2014-05-12' ]

    expect(parser.getDates(logs)).toEqual(expected);
  })

  it('prints the list of log dates', function () {
    var dates = [ '2014-05-10', '2014-05-11', '2014-05-12' ]
    var expected = '* What are all the dates the log covers?\n' +
    '2014-05-10\n' + '2014-05-11\n' + '2014-05-12\n';

    expect(parser.showDates(dates)).toEqual(expected);
  })

})
