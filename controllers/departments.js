/*
 * departments 部门
 */
const { Department } = require('../models');

module.exports = {
  getAll: async () => {
    const departments = await Department.query();
    return departments;
  },
  getById: async (id) => {
    const department = await Department.query().findById(id);
    return department;
  },
};
