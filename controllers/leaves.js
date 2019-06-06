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
};
