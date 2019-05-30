const { departments, employees, overtimes } = require('../controllers');

const loginMutation = require('./mutations/login');

module.exports = {
  Query: {
    isLogin: (parent, args, { ctx }) => typeof ctx.state.user !== 'undefined',
    me: (parent, args, { ctx }) => {
      if (ctx.state.user) {
        return employees.getById(ctx.state.user.id);
      }
      return null;
    },
    departments: () => departments.getAll(),
    overtimes: () => overtimes.getAll(),
  },
  Department: {
    director: ({ directorId }) => employees.getById(directorId),
    employees: ({ id }) => employees.getByDepartment(id),
  },
  Employee: {
    department: ({ departmentId }) => departments.getById(departmentId),
  },
  Mutation: {
    ...loginMutation,
  },
};
