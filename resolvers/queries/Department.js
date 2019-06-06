const { employees, leaves } = require('../../controllers');

module.exports = {
  director: ({ directorId }) => employees.getById(directorId),
  employees: ({ id }) => employees.getByDepartment(id),
  leaves: ({ id }) => leaves.getByDepartment(id),
};
