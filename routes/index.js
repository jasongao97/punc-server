/**
 * 服务路由集合
 */
const compose = require('koa-compose');
const router = require('koa-router')();
const { version } = require('../config');
const passport = require('../auth');

const BASE_URL = `/api/v${version}`;

// 应用状态
router.get('/', async (ctx) => {
  ctx.body = {
    auth: ctx.isAuthenticated(),
    status: 'running'
  };
});

router.post('/login', async (ctx) => {
  await passport.authenticate('local', (err, user, info, status) => {
    ctx.body = {
      err, user, info, status
    };
    if (user) ctx.login(user);
  })(ctx);
});

router.get('/logout', (ctx) => {
  ctx.logout();
  ctx.body = { auth: ctx.isAuthenticated(), user: ctx.state.user };
});

// --- 一级路由 --- //
// 部门接口
router.use(`${BASE_URL}/departments`, require('./departments'));
// 员工接口
router.use(`${BASE_URL}/employees`, require('./employees'));

router.all('*', (ctx) => {
  ctx.status = 404;
  ctx.state.errmsg = 'content not found';
});

module.exports = () => compose([router.routes(), router.allowedMethods()]);
