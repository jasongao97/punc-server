const Knex = require('knex');
const { connection } = require('./config');

const convertToCamel = s => s.replace(/_\w/g, m => m[1].toUpperCase());

const convertRow = (row) => {
  const convertedRow = {};
  Object.keys(row).forEach((field) => {
    convertedRow[convertToCamel(field)] = row[field];
  });
  return convertedRow;
};

const db = Knex({
  client: 'mysql',
  connection,
  postProcessResponse: (result) => {
    // TODO: add special case for raw results (depends on dialect)
    if (Array.isArray(result)) {
      return result.map(row => convertRow(row));
    }
    return convertRow(result);
  },
});
module.exports = db;
