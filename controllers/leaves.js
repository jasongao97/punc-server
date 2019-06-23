/*
 * leaves 请假
 */
const db = require('../db');

module.exports = {
  getByDepartment: async (departmentId) => {
    const leaves = await db('leaves').select().innerJoin('employees', 'leaves.employee_id', 'employees.id')
      .where('employees.department_id', departmentId);
    return leaves;
  },
  updateStatus: async (id, status) => {
    await db('leaves').select('id', id).update({
      status,
    });
  },
  create: async (object) => {
    await db('leaves').insert(object);
  }
};
