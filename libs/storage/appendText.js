'use strict';

const fileManager = require('./fileManager');

module.exports.handler = (event, context, callback) => {
  const text = event.queryStringParameters.text;

  fileManager.appendText(text).then(result => {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result
      })
    };

    callback(null, response);
  });
};
