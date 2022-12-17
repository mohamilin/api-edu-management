const httpStatus = require('http-status');
const { Sequelize } = require('sequelize');

const logger = require('../config/logger');
const ApiError = require('../utils/api-error');

const errorConverter = (err, req, res, next) => {
  let error = err;

  if (err instanceof Sequelize.DatabaseError) {
    const statusCode = 500;
    const message = 'Database related error';
    error = new ApiError(statusCode, message, false, err.stack);
  }

  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode ? error.statusCode : httpStatus.BAD_REQUEST;

    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }

  next(error);
};

const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;
  if (process.env.NODE_ENV === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  if (process.env.NODE_ENV === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
