'use strict';

const fileManager = require('./fileManager');

module.exports.handler = async (key) => {
  return await fileManager.getS3Object(key)
}
