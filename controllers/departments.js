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
  }
};
