/*
 * arrangements 永久班次安排
 */
const db = require('../db');

module.exports = {
  getByEmployee: async (id) => {
    const arrangements = await db('arrangements').select().where('employee_id', id);
    return arrangements;
  },
};
