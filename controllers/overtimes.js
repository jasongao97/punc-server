/*
 * overtimes 全体加班
 */
const { Overtime } = require('../models');

module.exports = {
  getAll: async () => {
    const overtimes = await Overtime.query();
    return overtimes;
  },
};
