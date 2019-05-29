/*
 * 中间件管理
 */
const compose = require('koa-compose');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const jwt = require('koa-jwt');
const { secret } = require('../config');

module.exports = () => compose([
  convert(bodyParser()),
  // auth,
  jwt({ secret, passthrough: true }),
]);
