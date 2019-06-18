/*
 * tempArrangements 临时班次安排
 */
const db = require('../db');

module.exports = {
  getByEmployee: async (id) => {
    const tempArrangements = await db('temp_arrangements').select().where('employee_id', id);
    return tempArrangements;
  },
  create: async (object) => {
    await db('temp_arrangements').insert(object);
  },
  update: async (id, object) => {
    await db('temp_arrangements').where('id', id).update(object);
  },
  delete: async (id) => {
    await db('temp_arrangements').where('id', id).delete();
  },
};
