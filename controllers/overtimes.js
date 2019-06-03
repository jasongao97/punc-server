/*
 * overtimes 全体加班
 */
const db = require('../db');

module.exports = {
  getAll: async () => {
    const overtimes = await db('overtimes').select();
    return overtimes;
  },
};
