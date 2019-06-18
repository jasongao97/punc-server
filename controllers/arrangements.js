/*
 * arrangements 永久班次安排
 */
const db = require('../db');

module.exports = {
  getByEmployee: async (id) => {
    const arrangements = await db('arrangements').select().where('employee_id', id);
    return arrangements;
  },
  create: async (object) => {
    await db('arrangements').insert(object);
  },
  delete: async (employeeId) => {
    await db('arrangements').where('employee_id', employeeId).delete();
  },
};
