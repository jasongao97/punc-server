/*
 * departments 部门
 */
const db = require('../db');

module.exports = {
  getAll: async () => {
    const departments = await db('departments').select();
    return departments;
  },
  getById: async (id) => {
    const departments = await db('departments').select().where('id', id);
    return departments[0];
  },
};
