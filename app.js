const Koa = require('koa');
const Knex = require('knex');
const { Model } = require('objection');
const { ApolloServer } = require('apollo-server-koa');
const { importSchema } = require('graphql-import');

const debug = require('debug')('koa');
const config = require('./config');
const middleware = require('./middlewares');

const typeDefs = importSchema('./schema.graphql');
const resolvers = require('./resolvers');

// 实例化 Koa
const app = new Koa();

// 初始化 Knex
const knex = Knex({
  client: 'mysql',
  connection: config.mysql,
});
Model.knex(knex);

// 引入中间件
app.use(middleware());

const data = {};
const cors = {
  origin: ['http://localhost:8888'],
  credentials: true,
};

// 建立应用
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: config.playground,
  context: ctx => ({
    ...ctx,
    data,
  }),
});

server.applyMiddleware({ app, path: '/', cors });

// 启动程序，监听端口
app.listen(config.port, () => debug('listening on port %o', config.port));
