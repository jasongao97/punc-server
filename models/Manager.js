const { Model, snakeCaseMappers } = require('objection');

class Manager extends Model {
  static get tableName() {
    return 'managers';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'name', 'password'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        passwd: { type: 'string' },
      },
    };
  }
}

module.exports = Manager;
