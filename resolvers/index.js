const bcrypt = require('bcryptjs');
const departments = require('../controllers/departments');

module.exports = {
  Query: {
    department: (parent, { id }) => departments.getById(id),
    isLogin: (parent, args, { ctx }) => typeof ctx.session.user !== 'undefined',
  },
  Mutation: {
    signup: async (parent, { username, pwd }, { data }) => {
      if (data[username]) {
        throw new Error('Another User with same username exists.');
      }

      // eslint-disable-next-line no-param-reassign
      data[username] = {
        pwd: await bcrypt.hashSync(pwd, 10),
      };

      return true;
    },
    login: async (parent, { username, pwd }, { ctx, data }) => {
      const user = data[username];
      if (user) {
        if (await bcrypt.compareSync(pwd, user.pwd)) {
          ctx.session.user = {
            ...user,
          };
          return true;
        }

        throw new Error('Incorrect password.');
      }

      throw new Error('No Such User exists.');
    },
  },
};
