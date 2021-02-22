'use strict';

const handler = require('./fileManager');

module.exports.handler = (key) => {
  return fileManager.getSignedUrl(key)
}
