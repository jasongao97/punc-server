const login = require('./login');
const employee = require('./employee');

module.exports = {
  ...login,
  ...employee,
};
