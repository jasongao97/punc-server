const bcrypt = require('bcryptjs');

const {
  leaves,
  attendances,
  employees,
} = require('../../controllers');
const { formatDate, formatTime } = require('../../utils');

module.exports = {
  applyLeave: async (parent, { info }, { ctx }) => {
    if (!ctx.state.user) {
      throw new Error('Not signed in.');
    }
    
    const newLeave = {
      type: info.type,
      status: 0,
      start_date: info.startDate,
      end_date: info.endDate,
      reason: info.reason,
      employee_id: ctx.state.user.id,
    };
    await leaves.create(newLeave);
    return true;
  },
  applyOvertime: async (parent, { reason }, { ctx }) => {
    if (!ctx.state.user) {
      throw new Error('Not signed in.');
    }

    const employeeId = ctx.state.user.id;
    const today = formatDate(new Date());
    await attendances.applyOvertime(employeeId, today, reason);
    return true;
  },
  check: async (parent, { type }, { ctx }) => {
    if (!ctx.state.user) {
      throw new Error('Not signed in.');
    }

    const now = new Date();

    if (type === 0) {
      const newAtt = {
        employee_id: ctx.state.user.id,
        date: formatDate(now),
        arrive_at: formatTime(now),
        status: 0,
      };
      await attendances.checkIn(newAtt);
      return true;
    } else {
      const upAtt = {
        employeeId: ctx.state.user.id,
        date: formatDate(now),
        leaveAt: formatTime(now),
      }
      await attendances.checkOut(upAtt)
      return true;
    }
  },
  updateInformation: async (parent, { info }, { ctx }) => {
    if (!ctx.state.user) {
      throw new Error('Not signed in.');
    }

    const employeeId = ctx.state.user.id;
    const upEmp = {};
    if (info.birthday) upEmp.birthday = info.birthday;
    if (info.password) upEmp.password = bcrypt.hashSync(info.password);

    await employees.update(employeeId, upEmp);
    return true;
  },
};
