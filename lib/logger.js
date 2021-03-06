'use strict'

const bunyan = require('bunyan')

/**
 * Bunyan logger for loki.
 * @author Anton Podviaznikov
 * @module loki:logger
 */
module.exports = bunyan.createLogger({
  name: 'loki',
  streams: _getStreams(),
  serializers: bunyan.stdSerializers
})

// Expose get streams for unit testing
module.exports._getStreams = _getStreams

/**
 * Streams for loki's bunyan logger.
 * @private
 * @return {array} An array of streams for the bunyan logger
 */
function _getStreams () {
  return [
    {
      level: process.env.LOG_LEVEL,
      stream: process.stdout
    }
  ]
}
