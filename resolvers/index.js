const { departments, employees } = require('../controllers');

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
    department: (parent, { id }) => departments.getById(id),
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
