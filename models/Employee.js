const { Model, snakeCaseMappers } = require('objection');

class Employee extends Model {
  static get tableName() {
    return 'employees';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }

  static get jsonSchema() {
    return {
      type: 'object',
      require: ['id', 'name', 'password', 'dipartment_id'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        birthday: { type: 'string' },
        password: { type: 'string' },
        dipartment_id: { type: 'integer' },
      },
    };
  }
}

module.exports = Employee;
