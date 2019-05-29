const { departments, employees } = require('../controllers');

const userMutation = require('./mutations/user');

module.exports = {
  Query: {
    isLogin: (parent, args, { ctx }) => typeof ctx.state.user !== 'undefined',
    me: (parent, args, { ctx }) => {
      if (ctx.state.user) {
        return employees.getById(ctx.state.user.id);
      }
      return null;
    },
    department: (parent, { id }) => departments.getById(id),
  },
  Employee: {
    department: ({ departmentId }) => departments.getById(departmentId),
  },
  Mutation: {
    ...userMutation,
  },
};
