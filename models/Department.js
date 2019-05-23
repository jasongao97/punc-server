const { Model, snakeCaseMappers } = require('objection');

class Department extends Model {
  static get tableName() {
    return 'departments';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'name'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        director_id: { type: 'integer' },
      },
    };
  }
}

module.exports = Department;
