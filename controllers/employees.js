/*
 * departments 员工
 */
const { Employee } = require('../models');

module.exports = {
  getById: async (id) => {
    const employee = await Employee.query().findById(id);
    return employee;
  },
  getByName: async (name) => {
    const employee = await Employee.query().findOne('name', '=', name);
    return employee;
  },
  new: async (object) => {
    if (await Employee.query().findOne('name', '=', object.name)) {
      throw new Error('Employee already exists.');
    }
    const employee = await Employee.query().insert(object);
    return employee;
  },
};
