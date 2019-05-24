const Koa = require('koa');
const Knex = require('knex');
const { Model } = require('objection');
const { ApolloServer } = require('apollo-server-koa');
const { importSchema } = require('graphql-import');

const { playground, connection } = require('./config');
const middleware = require('./middlewares');

const typeDefs = importSchema('./schema/schema.graphql');
const resolvers = require('./resolvers');

// 实例化 Koa
const app = new Koa();

// 初始化 Knex
const knex = Knex({ client: 'mysql', connection });
Model.knex(knex);

// 引入中间件
app.use(middleware());

const cors = {
  origin: ['http://localhost:8888'],
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
