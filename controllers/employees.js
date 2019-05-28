/*
 * employees 员工
 */
const Employee = require('../models/Employee');
const Arrangement = require('../models/Arrangement');
const TempArrangement = require('../models/TempArrangement');

module.exports = {
  getAll: async (ctx) => {
    const employees = await Employee.query();
    ctx.state.data = employees;
  },
  getById: async (ctx) => {
    const { id } = ctx.params;
    const employee = await Employee.query().findById(id);
    ctx.state.data = employee;
  },
  getArrangements: async (ctx) => {
    // const { employeeId } = ctx.params;
    // const arrangement = await Arrangement.query().findById(employeeId);
    // const tempArrangement = await TempArrangement.query().findById(employeeId);
    const arrangeOfEmployee = await employee
      .$relatedQuery('arrangements')
      .where('employeeId', '=', 'employees.id')
      .innerJoin('employees.id', 'arrangements', 'tempArrangements');

    ctx.state.data = arrangeOfEmployee;
  },
  post: async (ctx) => {
    const {
      name, birthday, password, departmentId
    } = ctx.request.body;
    const employee = await Employee.query()
      .insert({
        name, birthday, password, departmentId
      });
    ctx.state.code = 201;
    ctx.state.data = employee;
  },
  putDirector: async (ctx) => {
    const {
      id, name, birthday, password, departmentId
    } = ctx.request.body;
    const employee = await Employee.query().findById(id).patch({
      name, birthday, password, departmentId
    });
    ctx.state.data = employee;
  },
  deleteById: async (ctx) => {
    const { id } = ctx.params;
    const employee = await Employee.query().deleteById(id);
    ctx.state.data = employee;
  }
};
