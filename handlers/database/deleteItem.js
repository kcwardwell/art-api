'use strict';

const databaseManager = require('./databaseManager');


module.exports.handler = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;

  databaseManager.deleteItem(itemId).then(response => {
    callback(null, createResponse(200, 'Item was deleted'));
  });
};