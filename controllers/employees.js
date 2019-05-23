/*
 * departments 员工
 */
const Employee = require('../models/Employee');

module.exports = {
  getById: async (id) => {
    const employee = await Employee.query().findById(id);
    return employee;
  },
  getByName: async (name) => {
    const employee = await Employee.query().findOne('name', '=', name);
    return employee;
  },
  insert: async (object) => {
    const employee = await Employee.query().insert(object);
    return employee;
  },
};
