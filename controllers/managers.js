/*
 * managers 经理
 */
const db = require('../db');

module.exports = {
  getByName: async (name) => {
    const managers = await db('managers').select().where('name', name);
    return managers[0];
  },
};
