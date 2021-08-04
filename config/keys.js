const { dbConfig } = require("../config");

module.exports = {
  mongoURI: dbConfig.dbUri,
  secretOrKey: "secret",
};
