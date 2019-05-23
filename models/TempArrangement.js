const { Model, snakeCaseMappers } = require('objection');

class TempArrangement extends Model {
  static get tableName() {
    return 'temp_arrangements';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'start_time', 'end_time', 'start_date', 'end_date', 'employee_id'],

      properties: {
        id: { type: 'integer' },
        start_time: { type: 'string' },
        end_time: { type: 'string' },
        start_date: { type: 'string' },
        end_date: { type: 'string' },
        employee_id: { type: 'integer' },
      },
    };
  }
}

module.exports = TempArrangement;
