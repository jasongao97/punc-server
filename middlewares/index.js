/*
 * 中间件管理
 */
const compose = require('koa-compose');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const response = require('./response');

module.exports = () => compose([
  response,
  convert(logger()),
  convert(bodyParser())
]);
