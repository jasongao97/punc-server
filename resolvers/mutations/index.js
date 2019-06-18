const login = require('./login');
const manager = require('./manager');
const director = require('./director');

module.exports = {
  ...login,
  ...manager,
  ...director,
};
