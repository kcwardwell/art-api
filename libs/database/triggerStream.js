'use strict';

const databaseManager = require('./databaseManager');
const uuidv1 = require('uuid/v1');


module.exports.triggerStream = (event, context, callback) => {
  console.log('trigger stream was called');

  const eventData = event.Records[0];
  //console.log(eventData);

  console.log(eventData.dynamodb.NewImage);
  callback(null, null);
};
