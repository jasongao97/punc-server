const debug = require('debug')('koa-response');

/**
 * 响应处理模块
 */
module.exports = async (ctx, next) => {
  try {
    // 调用下一个 middleware
    await next();

    // 处理响应结果
    // 如果直接写入在 body 中，则不作处理
    // 如果写在 ctx.body 为空，则使用 state 作为响应
    if (!ctx.body) {
      if (ctx.state.errmsg) {
        ctx.body = {
          code: ctx.state.code !== undefined ? ctx.state.code : -1,
          errmsg: ctx.state.errmsg
        };
      } else {
        ctx.body = {
          code: ctx.state.code !== undefined ? ctx.state.code : 0,
          data: ctx.state.data !== undefined ? ctx.state.data : {}
        };
      }
    }
  } catch (error) {
    // catch 住全局的错误信息
    debug('Catch Error: %o', error);

    // 设置状态码
    ctx.status = error.status || 400;

    // 输出详细的错误信息
    ctx.body = {
      code: -1,
      error: error && error.message ? error.message : error.toString()
    };
  }
};
