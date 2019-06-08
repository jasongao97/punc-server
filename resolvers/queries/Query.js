const {
  departments, employees, managers, overtimes,
} = require('../../controllers');

module.exports = {
  isLogin: (parent, args, { ctx }) => typeof ctx.state.user !== 'undefined',
  me: (parent, args, { ctx }) => {
    if (ctx.state.user) {
      if (ctx.state.user.type === 0) {
        return employees.getById(ctx.state.user.id);
      }
      return managers.getById(ctx.state.user.id);
    }
    throw new Error('Not signed in.');
  },
  departments: (parent, args, { ctx }) => {
    if (ctx.state.user) {
      if (ctx.state.user.type === 0) throw new Error('interface not allowed');
      return departments.getAll();
    }
    throw new Error('Not signed in.');
  },
  overtimes: (parent, args, { ctx }) => {
    if (ctx.state.user) {
      if (ctx.state.user.type === 0) throw new Error('interface not allowed');
      return overtimes.getAll();
    }
    throw new Error('Not signed in.');
  },
};
