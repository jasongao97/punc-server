const Koa = require('koa');
const { ApolloServer } = require('apollo-server-koa');
const { importSchema } = require('graphql-import');

const { playground } = require('./config');
const middleware = require('./middlewares');

const typeDefs = importSchema('./schema/schema.graphql');
const resolvers = require('./resolvers');

// 实例化 Koa
const app = new Koa();

// 引入中间件
app.use(middleware());

const cors = {
  origin: ['https://jgao.net'],
  credentials: true,
};

// 建立应用
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground,
  context: ctx => ({
    ...ctx,
  }),
});

server.applyMiddleware({ app, path: '/', cors });

module.exports = app;
