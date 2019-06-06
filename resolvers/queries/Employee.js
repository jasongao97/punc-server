const { departments, arrangements } = require('../../controllers');

module.exports = {
  department: ({ departmentId }) => departments.getById(departmentId),
  arrangements: ({ id }) => arrangements.getByEmployee(id),
};
