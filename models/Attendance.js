const { Model, snakeCaseMappers } = require('objection');

class Attendance extends Model {
  static get tableName() {
    return 'attendances';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get idColumn() {
    return ['employee_id', 'date'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['employee_id', 'date', 'arrive_at', 'status'],

      properties: {
        employee_id: { type: 'integer' },
        date: { type: 'string' },
        arrive_at: { type: 'string' },
        leave_at: { type: 'string' },
        status: { type: 'integer' },
        reason: { type: 'string' },
      },
    };
  }
}

module.exports = Attendance;
