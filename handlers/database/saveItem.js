'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');



module.exports.handler = (event, context, callback) => {
  const item = JSON.parse(event.body);
  console.log(item);
  item.itemId = uuidv1();

  databaseManager.saveItem(item).then(response => {
    console.log(response);
    callback(null, databaseManager.createResponse(200, response));
  });
};