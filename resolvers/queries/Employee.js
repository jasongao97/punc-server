const { departments } = require('../../controllers');

module.exports = {
  department: ({ departmentId }) => departments.getById(departmentId),
};
