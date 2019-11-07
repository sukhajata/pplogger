/**
 * @fileoverview gRPC-Web generated client stub for pplogger
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.pplogger = require('./logger-service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pplogger.LoggerServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.pplogger.LoggerServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pplogger.ErrorMessage,
 *   !proto.pplogger.Response>}
 */
const methodDescriptor_LoggerService_LogError = new grpc.web.MethodDescriptor(
  '/pplogger.LoggerService/LogError',
  grpc.web.MethodType.UNARY,
  proto.pplogger.ErrorMessage,
  proto.pplogger.Response,
  /**
   * @param {!proto.pplogger.ErrorMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.Response.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pplogger.ErrorMessage,
 *   !proto.pplogger.Response>}
 */
const methodInfo_LoggerService_LogError = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pplogger.Response,
  /**
   * @param {!proto.pplogger.ErrorMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.Response.deserializeBinary
);


/**
 * @param {!proto.pplogger.ErrorMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pplogger.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServiceClient.prototype.logError =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pplogger.LoggerService/LogError',
      request,
      metadata || {},
      methodDescriptor_LoggerService_LogError,
      callback);
};


/**
 * @param {!proto.pplogger.ErrorMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pplogger.Response>}
 *     A native promise that resolves to the response
 */
proto.pplogger.LoggerServicePromiseClient.prototype.logError =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pplogger.LoggerService/LogError',
      request,
      metadata || {},
      methodDescriptor_LoggerService_LogError);
};


module.exports = proto.pplogger;

