const { Model, snakeCaseMappers } = require('objection');

class TempArrangement extends Model {
  static get tableName() {
    return 'tempArrangements';
  }

  static get columnNameMappers() {
    return snakeCaseMappers();
  }
}

module.exports = TempArrangement;
