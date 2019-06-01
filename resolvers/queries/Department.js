const { employees } = require('../../controllers');

module.exports = {
  director: ({ directorId }) => employees.getById(directorId),
  employees: ({ id }) => employees.getByDepartment(id),
};
