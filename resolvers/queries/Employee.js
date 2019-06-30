const {
  departments, arrangements, tempArrangements, attendances, leaves,
} = require('../../controllers');

module.exports = {
  department: ({ departmentId }) => departments.getById(departmentId),
  arrangements: ({ id }) => arrangements.getByEmployee(id),
  tempArrangements: ({ id }) => tempArrangements.getByEmployee(id),
  attendances: ({ id }, { startDate, endDate }) => attendances
    .getByEmployeeAndDates(id, startDate, endDate),
  leaves: ({ id }) => leaves.getByEmployee(id),
};
