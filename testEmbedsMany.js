'use strict';

var async = require('async');
var request = require('request');

var newspaperId;
var newspaperOptions = {
  uri: 'http://localhost:3000/api/newspapers',
  method: 'POST',
  json: {
    name: 'New York Times',
  },
};

// Post newspaper
request(newspaperOptions, function(error, response, body) {
  if (!error) {
    console.log('Posted newspaper.', body);

    newspaperId = body.id;
    var articleOptions = {
      uri: 'http://localhost:3000/api/newspapers/' + newspaperId + '/articles',
      method: 'POST',
      json: {},
    };

    // Post articles
    async.map([
      'Article One',
      'Article Two',
      'Article Three',
      'Article Four',
    ], function(item, callback) {
      articleOptions.json.name = item;
      request(articleOptions, function(error, response, body) {
        if (!error) {
          callback(null, body);
        } else {
          callback(error);
        }
      });
    }, function(err, results) {
      for (var i = results.length - 1; i >= 0; i--) {
        console.log('Server reports successully posted:', results[i]);
      }

      // Retrieve and display that newspaper instance
      newspaperOptions.uri = 'http://localhost:3000/api/newspapers/' + newspaperId;
      newspaperOptions.method = 'GET';
      newspaperOptions.json = undefined;
      request(newspaperOptions, function(error, response, body) {
        if (!error) {
          console.log('Retrieved newspaper:', body);
        } else {
          console.log(error);
        }
      });
    });
  } else {
    console.log(error);
  }
});
