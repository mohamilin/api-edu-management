const database = require('./models')

module.exports = class Connection {
    connect() {
        try {
            database.sequelize.authenticate();
            console.log({listModels: database.sequelize.models});
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}