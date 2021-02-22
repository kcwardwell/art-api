'use strict';

const fileManager = require('./fileManager');

module.exports.handler = (bucket, key, body) => {
  return S3.putObject({
    Body: body,
    Bucket: bucket,
    ContentType: 'text/plain',
    Key: key
  }).promise();
}