'use strict';

module.exports = function(app) {
  var ds = app.datasources.postgres;
  if (app.models.Newspaper.dataSource.connector.name === 'postgresql') {
    ds.automigrate('Newspaper', function(err) {
      if (err) throw err;
    });
  }
};
