/*
 * tempArrangements 临时班次安排
 */
const db = require('../db');

module.exports = {
  getByEmployee: async (id) => {
    const tempArrangements = await db('temp_arrangements').select().where('employee_id', id);
    return tempArrangements;
  },
};
