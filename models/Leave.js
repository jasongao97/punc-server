const { Model, snakeCaseMappers } = require('objection');

class Leave extends Model {
  static get tableName() {
    return 'leaves';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'type', 'status', 'start_date', 'end_date', 'reason', 'employee_id'],

      properties: {
        id: { type: 'integer' },
        type: { type: 'integer' },
        status: { type: 'integer' },
        start_date: { type: 'string' },
        end_date: { type: 'string' },
        reason: { type: 'string' },
        employee_id: { type: 'integer' },
      },
    };
  }
}

module.exports = Leave;
