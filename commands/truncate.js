const {
  QueryTypes
} = require("sequelize");
const ModelDatabase = require("../database/models");
const SequelizeQuery = ModelDatabase.sequelize;

async function truncate() {
    // table users
  await SequelizeQuery.query("TRUNCATE TABLE `users`", {
    type: QueryTypes.DELETE,
    raw: true,
  });
}



module.exports = truncate;

truncate()
  .then(() => console.log('Success TRUNCATE'))
  .catch((e) => console.log('Failed', e))
  .finally(() => process.exit());
