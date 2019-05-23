/*
 * 中间件管理
 */
const compose = require('koa-compose');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
const session = require('koa-session2');

module.exports = () => compose([
  convert(bodyParser()),
  session({
    key: 'punc',
  }),
]);
