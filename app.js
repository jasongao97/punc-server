const Koa = require('koa');
const Knex = require('knex');
const { Model } = require('objection');
const session = require('koa-session');

const debug = require('debug')('koa');
const config = require('./config');
const middleware = require('./middlewares');
const passport = require('./auth');
const routes = require('./routes');

// 实例化 Koa
const app = new Koa();

// 初始化 Knex
const knex = Knex({
  client: 'mysql',
  connection: config.mysql
});
Model.knex(knex);

// session
app.keys = ['session-secret-key'];
app.use(session(app));

// 引入中间件
app.use(middleware());

// 鉴权
app.use(passport.initialize());
app.use(passport.session());

// 引入路由分发
app.use(routes());

// 启动程序，监听端口
app.listen(config.port, () => debug('listening on port %o', config.port));
