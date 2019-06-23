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
  updateStatus: async (employeeId, date, status) => {
    await db('attendances').where('employee_id', employeeId).andWhere('date', date).update({
      status,
    });
  },
  checkIn: async (object) => {
    try {
      await db('attendances').insert(object);
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') throw new Error('Already checked in.');
    }
  },
  checkOut: async (object) => {
    const attendances = await db('attendances').select()
      .where('employee_id', object.employeeId).andWhere('date', object.date);

    if (attendances.length) {
      if (attendances[0].leaveAt) throw new Error('Already checked out.');
      await db('attendances').where('employee_id', object.employeeId).andWhere('date', object.date).update({
        leave_at: object.leaveAt,
      });
    } else throw new Error('Haven\'t checked in.');
  },
  applyOvertime: async (employeeId, date, reason) => {
    const attendances = await db('attendances').select()
      .where('employee_id', employeeId).andWhere('date', date);

    if (attendances.length) {
      await db('attendances').where('employee_id', employeeId).andWhere('date', date).update({
        reason,
      });
    } else throw new Error('Haven\'t checked in.');
  },
};
