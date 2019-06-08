/*
 * attendances 签到
 */
const db = require('../db');

module.exports = {
  getByEmployeeAndDates: async (id, startDate, endDate) => {
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      throw new Error('startDate can not be bigger than endDate');
    }

    let attendances = await db('attendances').select().where('employee_id', id);
    if (startDate) {
      attendances = attendances.filter(
        attendance => new Date(attendance.date) >= new Date(startDate),
      );
    }
    if (endDate) {
      attendances = attendances.filter(
        attendance => new Date(attendance.date) <= new Date(endDate),
      );
    }

    return attendances;
  },
};
