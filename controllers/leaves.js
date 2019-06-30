/*
 * leaves 请假
 */
const db = require('../db');

module.exports = {
  getByDepartment: async (departmentId) => {
    const leaves = await db('employees').select().innerJoin('leaves', 'employees.id', 'leaves.employee_id')
      .where('employees.department_id', departmentId);
    return leaves;
  },
  getByEmployee: async (employeeId) => {
    const leaves = await db('leaves').select().where('employee_id', employeeId);
    return leaves;
  },
  updateStatus: async (id, status) => {
    await db('leaves').select().where('id', id).update({
      status,
    });
  },
  create: async (object) => {
    await db('leaves').insert(object);
  },
};
