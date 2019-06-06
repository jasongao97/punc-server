const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const { employees, managers } = require('../../controllers');
const { secret } = require('../../config');

module.exports = {
  login: async (parent, { name, pwd, type }) => {
    let user = {};
    if (type === 0) {
      user = await employees.getByName(name);
    } else {
      user = await managers.getByName(name);
    }

    if (user) {
      if (await bcrypt.compareSync(pwd, user.password)) {
        return jsonwebtoken.sign(
          { id: user.id, name, type },
          secret,
          { expiresIn: '1d' },
        );
      }

      throw new Error('Incorrect password.');
    }

    throw new Error('No Such User exists.');
  },
};
