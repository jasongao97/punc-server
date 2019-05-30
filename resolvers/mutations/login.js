const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const { employees } = require('../../controllers');
const { secret } = require('../../config');

module.exports = {
  login: async (parent, { name, pwd }) => {
    const employee = await employees.getByName(name);
    if (employee) {
      if (await bcrypt.compareSync(pwd, employee.password)) {
        return jsonwebtoken.sign(
          { id: employee.id, name },
          secret,
          { expiresIn: '1d' },
        );
      }

      throw new Error('Incorrect password.');
    }

    throw new Error('No Such User exists.');
  },
};
