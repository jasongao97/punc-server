const bcrypt = require('bcryptjs');
const departments = require('../controllers/departments');
const employees = require('../controllers/employees');

module.exports = {
  Query: {
    isLogin: (parent, args, { ctx }) => typeof ctx.session.user !== 'undefined',
    me: (parent, args, { ctx }) => ctx.session.user,
    department: (parent, { id }) => departments.getById(id),
  },
  Employee: {
    department: ({ departmentId }) => departments.getById(departmentId),
  },
  Mutation: {
    signup: async (parent, { name, pwd }) => {
      if (await employees.getByName(name)) {
        throw new Error('Employee already exists.');
      }

      const employee = {
        name,
        birthday: '1997-09-26',
        password: bcrypt.hashSync(pwd, 10),
        departmentId: 1,
      };
      await employees.insert(employee);
      return true;
    },
    login: async (parent, { name, pwd }, { ctx }) => {
      const employee = await employees.getByName(name);
      if (employee) {
        if (await bcrypt.compareSync(pwd, employee.password)) {
          ctx.session.user = {
            ...employee,
          };
          return true;
        }

        throw new Error('Incorrect password.');
      }

      throw new Error('No Such User exists.');
    },
  },
};
