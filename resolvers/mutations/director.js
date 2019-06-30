const {
  arrangements,
  tempArrangements,
  leaves,
  attendances,
} = require('../../controllers');

module.exports = {
  updateArrangements: async (parent, req) => {
    await arrangements.delete(req.employeeId);
    req.arrangements.forEach((arrangement) => {
      const newArr = {
        employee_id: req.employeeId,
        day: arrangement.day,
        start_time: arrangement.startTime,
        end_time: arrangement.endTime,
      };
      arrangements.create(newArr);
    });
    return true;
  },
  createTempArrangement: async (parent, { employeeId, info }) => {
    const newTemArr = {
      start_time: info.startTime,
      end_time: info.endTime,
      start_date: info.startDate,
      end_date: info.endDate,
      employee_id: employeeId,
    };
    await tempArrangements.create(newTemArr);
    return true;
  },
  updateTempArrangement: async (parent, { id, info }) => {
    const updates = {};
    if (info.startTime) updates.start_time = info.startTime;
    if (info.endTime) updates.end_time = info.endTime;
    if (info.startDate) updates.start_date = info.startDate;
    if (info.endDate) updates.end_date = info.endDate;
    await tempArrangements.update(id, updates);
    return true;
  },
  deleteTempArrangement: async (parent, { id }) => {
    await tempArrangements.delete(id);
    return true;
  },
  approveLeave: async (parent, { id, status }) => {
    await leaves.updateStatus(id, status);
    return true;
  },
  approveOvertime: async (parent, { employeeId, date, status }) => {
    await attendances.updateStatus(employeeId, date, status);
    return true;
  },
};
