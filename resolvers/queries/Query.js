const { departments, employees, overtimes } = require('../../controllers');

module.exports = {
  isLogin: (parent, args, { ctx }) => typeof ctx.state.user !== 'undefined',
  me: (parent, args, { ctx }) => {
    if (ctx.state.user) {
      return employees.getById(ctx.state.user.id);
    }
    throw new Error('Not signed in.');
  },
  departments: (parent, args, { ctx }) => {
    if (ctx.state.user) {
      return departments.getAll();
    }
    throw new Error('Not signed in.');
  },
  overtimes: (parent, args, { ctx }) => {
    if (ctx.state.user) {
      return overtimes.getAll();
    }
    throw new Error('Not signed in.');
  },
};
