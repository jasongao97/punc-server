/*
 * 认证
 */
const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const Manager = require('../models/Manager');

// 序列化 ctx.login()触发
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// 反序列化 session中存在"passport":{"user":"1"}触发
passport.deserializeUser(async (id, done) => {
  const manager = await Manager.query().findById(id);
  done(null, manager);
});

// 用户名密码登录模式
passport.use(
  new LocalStrategy(async (username, password, done) => {
    const manager = await Manager.query().where('name', username);

    if (!manager.length) {
      done(null, false, { message: 'Incorrect username.' });
    } else if (manager[0].password !== password) {
      done(null, false, { message: 'Incorrect password.' });
    } else {
      done(null, manager[0]);
    }
  })
);

module.exports = passport;
