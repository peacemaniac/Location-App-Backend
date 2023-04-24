const { submitQuery } = require("~root/lib/database");

const selectAllLocations = () =>
  submitQuery`SELECT location_id as id, name, country, photo, description FROM locations;`;

module.exports = selectAllLocations;
