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


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pplogger.DeviceLogMessage,
 *   !proto.pplogger.Response>}
 */
const methodDescriptor_LoggerService_LogDeviceEvent = new grpc.web.MethodDescriptor(
  '/pplogger.LoggerService/LogDeviceEvent',
  grpc.web.MethodType.UNARY,
  proto.pplogger.DeviceLogMessage,
  proto.pplogger.Response,
  /**
   * @param {!proto.pplogger.DeviceLogMessage} request
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
 *   !proto.pplogger.DeviceLogMessage,
 *   !proto.pplogger.Response>}
 */
const methodInfo_LoggerService_LogDeviceEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pplogger.Response,
  /**
   * @param {!proto.pplogger.DeviceLogMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.Response.deserializeBinary
);


/**
 * @param {!proto.pplogger.DeviceLogMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pplogger.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServiceClient.prototype.logDeviceEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pplogger.LoggerService/LogDeviceEvent',
      request,
      metadata || {},
      methodDescriptor_LoggerService_LogDeviceEvent,
      callback);
};


/**
 * @param {!proto.pplogger.DeviceLogMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pplogger.Response>}
 *     A native promise that resolves to the response
 */
proto.pplogger.LoggerServicePromiseClient.prototype.logDeviceEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pplogger.LoggerService/LogDeviceEvent',
      request,
      metadata || {},
      methodDescriptor_LoggerService_LogDeviceEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pplogger.OpAlarmMessage,
 *   !proto.pplogger.Response>}
 */
const methodDescriptor_LoggerService_LogOpAlarm = new grpc.web.MethodDescriptor(
  '/pplogger.LoggerService/LogOpAlarm',
  grpc.web.MethodType.UNARY,
  proto.pplogger.OpAlarmMessage,
  proto.pplogger.Response,
  /**
   * @param {!proto.pplogger.OpAlarmMessage} request
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
 *   !proto.pplogger.OpAlarmMessage,
 *   !proto.pplogger.Response>}
 */
const methodInfo_LoggerService_LogOpAlarm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pplogger.Response,
  /**
   * @param {!proto.pplogger.OpAlarmMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.Response.deserializeBinary
);


/**
 * @param {!proto.pplogger.OpAlarmMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.pplogger.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServiceClient.prototype.logOpAlarm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/pplogger.LoggerService/LogOpAlarm',
      request,
      metadata || {},
      methodDescriptor_LoggerService_LogOpAlarm,
      callback);
};


/**
 * @param {!proto.pplogger.OpAlarmMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.pplogger.Response>}
 *     A native promise that resolves to the response
 */
proto.pplogger.LoggerServicePromiseClient.prototype.logOpAlarm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/pplogger.LoggerService/LogOpAlarm',
      request,
      metadata || {},
      methodDescriptor_LoggerService_LogOpAlarm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pplogger.StreamErrorsRequest,
 *   !proto.pplogger.ErrorMessage>}
 */
const methodDescriptor_LoggerService_StreamErrors = new grpc.web.MethodDescriptor(
  '/pplogger.LoggerService/StreamErrors',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pplogger.StreamErrorsRequest,
  proto.pplogger.ErrorMessage,
  /**
   * @param {!proto.pplogger.StreamErrorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.ErrorMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pplogger.StreamErrorsRequest,
 *   !proto.pplogger.ErrorMessage>}
 */
const methodInfo_LoggerService_StreamErrors = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pplogger.ErrorMessage,
  /**
   * @param {!proto.pplogger.StreamErrorsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.ErrorMessage.deserializeBinary
);


/**
 * @param {!proto.pplogger.StreamErrorsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.ErrorMessage>}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServiceClient.prototype.streamErrors =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pplogger.LoggerService/StreamErrors',
      request,
      metadata || {},
      methodDescriptor_LoggerService_StreamErrors);
};


/**
 * @param {!proto.pplogger.StreamErrorsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.ErrorMessage>}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServicePromiseClient.prototype.streamErrors =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pplogger.LoggerService/StreamErrors',
      request,
      metadata || {},
      methodDescriptor_LoggerService_StreamErrors);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.pplogger.StreamDeviceLogRequest,
 *   !proto.pplogger.DeviceLogMessage>}
 */
const methodDescriptor_LoggerService_StreamDeviceLog = new grpc.web.MethodDescriptor(
  '/pplogger.LoggerService/StreamDeviceLog',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.pplogger.StreamDeviceLogRequest,
  proto.pplogger.DeviceLogMessage,
  /**
   * @param {!proto.pplogger.StreamDeviceLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.DeviceLogMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.pplogger.StreamDeviceLogRequest,
 *   !proto.pplogger.DeviceLogMessage>}
 */
const methodInfo_LoggerService_StreamDeviceLog = new grpc.web.AbstractClientBase.MethodInfo(
  proto.pplogger.DeviceLogMessage,
  /**
   * @param {!proto.pplogger.StreamDeviceLogRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.pplogger.DeviceLogMessage.deserializeBinary
);


/**
 * @param {!proto.pplogger.StreamDeviceLogRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.DeviceLogMessage>}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServiceClient.prototype.streamDeviceLog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pplogger.LoggerService/StreamDeviceLog',
      request,
      metadata || {},
      methodDescriptor_LoggerService_StreamDeviceLog);
};


/**
 * @param {!proto.pplogger.StreamDeviceLogRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.pplogger.DeviceLogMessage>}
 *     The XHR Node Readable Stream
 */
proto.pplogger.LoggerServicePromiseClient.prototype.streamDeviceLog =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/pplogger.LoggerService/StreamDeviceLog',
      request,
      metadata || {},
      methodDescriptor_LoggerService_StreamDeviceLog);
};


module.exports = proto.pplogger;

