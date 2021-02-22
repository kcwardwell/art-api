'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');

module.exports.handler = (event, context, callback) => {
  const itemId = event.pathParameters.itemId;

  databaseManager.getItem(itemId).then(response => {
    console.log(response);
    callback(null, databaseManager.createResponse(200, response));
  });
};