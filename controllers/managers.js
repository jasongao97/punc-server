/*
 * managers 经理
 */
const db = require('../db');

module.exports = {
  getById: async (id) => {
    const managers = await db('managers').select().where('id', id);
    return managers[0];
  },
  getByName: async (name) => {
    const managers = await db('managers').select().where('name', name);
    return managers[0];
  },
};
