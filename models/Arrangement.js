const { Model, snakeCaseMappers } = require('objection');

class Arrangement extends Model {
  static get tableName() {
    return 'arrangements';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get idColumn() {
    return ['employee_id', 'day'];
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['employee_id', 'day', 'start_time', 'end_time'],

      properties: {
        employee_id: { type: 'integer' },
        day: { type: 'string' },
        start_time: { type: 'string' },
        end_time: { type: 'string' },
      },
    };
  }
}

module.exports = Arrangement;
