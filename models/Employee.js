const { Model, snakeCaseMappers } = require('objection');

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

module.exports = Employee;
