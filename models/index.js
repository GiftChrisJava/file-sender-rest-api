// get database configurations
const config = require("../config/dbConfig");

// get sequelize
const { Sequelize, DataTypes } = require("sequelize");

// create a new Sequelize object
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.DIALECT,
});

// authenticate
sequelize
  .authenticate()
  .then(() => {
    console.log("connectes");
  })
  .catch(console.error());

// create an empty db array
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const user = require("../models/User")(sequelize, DataTypes);

db.user = user;

// run the database
db.sequelize.sync({ force: false }).then(() => {
  console.log("re-sync...");
});

module.exports = db;
