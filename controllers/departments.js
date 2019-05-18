/*
 * departments 部门
 */
const Department = require('../models/Department');

module.exports = {
  getAll: async (ctx) => {
    const departments = await Department.query();
    ctx.state.data = departments;
  },
  getById: async (ctx) => {
    const { id } = ctx.params;

    const department = await Department.query().findById(id);
    ctx.state.data = department;
  },
  post: async (ctx) => {
    const { name } = ctx.request.body;
    const department = await Department.query().insert({ name });
    ctx.state.code = 201;
    ctx.state.data = department;
  },
  putDirector: async (ctx) => {
    const { id, name } = ctx.request.body;
    const department = await Department.query().findById(id).patch({ name });
    ctx.state.data = department;
  },
  deleteById: async (ctx) => {
    const { id } = ctx.params;
    const department = await Department.query().deleteById(id);
    ctx.state.data = department;
  }
};
