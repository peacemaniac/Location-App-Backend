const { submitQuery } = require("~root/lib/database");

const selectLocationById = ({ locationId }) =>
  submitQuery`SELECT location_id as id, name, country, photo, description FROM locations WHERE location_id = ${locationId}`;

module.exports = selectLocationById;
