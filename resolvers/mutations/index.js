const login = require('./login');
const manager = require('./manager');
const director = require('./director');
const employee = require('./employee');

module.exports = {
  ...login,
  ...manager,
  ...director,
  ...employee,
};
