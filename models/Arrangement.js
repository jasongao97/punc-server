const { Model, snakeCaseMappers } = require('objection');

class Arrangement extends Model {
  static get tableName() {
    return 'arrangements';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

module.exports = Arrangement;
