'use strict';

const databaseManager = require('./databaseManager');
const libraryManager = require('./libraryManager');


module.exports.handler = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;

  databaseManager.deleteItem(itemId).then(response => {
    callback(null, libraryManager.createResponse(200, 'Item was deleted'));
  });
};