/*
 * employees 员工
 */
const db = require('../db');

module.exports = {
  getById: async (id) => {
    const employees = await db('employees').select().where('id', id);
    return employees[0];
  },
  getByName: async (name) => {
    const employees = await db('employees').select().where('name', name);
    return employees[0];
  },
  getByDepartment: async (departmentId) => {
    const employees = await db('employees').select().where('department_id', '=', departmentId);
    return employees;
  },
  create: async (object) => {
    const employee = await db('employees').insert(object);
    return employee;
  },
};
