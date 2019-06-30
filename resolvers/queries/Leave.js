const {
  employees,
} = require('../../controllers');

module.exports = {
  employee: ({ employeeId }) => employees.getById(employeeId),
};
