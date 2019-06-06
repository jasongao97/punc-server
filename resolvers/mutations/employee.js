const bcrypt = require('bcryptjs');
const { employees } = require('../../controllers');

module.exports = {
  createEmployee: async (parent, { info }) => {
    const newEmp = {
      name: info.name,
      birthday: info.birthday || null,
      password: bcrypt.hashSync(info.password),
      department_id: info.departmentId,
    };
    await employees.create(newEmp);
    return true;
  },
  updateEmployee: async (parent, { id, info }) => {
    const upEmp = {};
    if (info.name) upEmp.name = info.name;
    if (info.birthday) upEmp.birthday = info.birthday;
    if (info.password) upEmp.password = bcrypt.hashSync(info.password);
    if (info.departmentId) upEmp.department_id = info.departmentId;
    await employees.update(id, upEmp);
    return true;
  },
  deleteEmployee: async (parent, { id }) => {
    await employees.delete(id);
    return true;
  },
};
