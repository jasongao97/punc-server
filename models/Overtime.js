const { Model, snakeCaseMappers } = require('objection');

class Overtime extends Model {
  static get tableName() {
    return 'overtimes';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'start_time', 'end_time', 'date'],

      properties: {
        id: { type: 'integer' },
        start_time: { type: 'string' },
        end_time: { type: 'string' },
        date: { type: 'string' },
      },
    };
  }
}

module.exports = Overtime;
