const { submitQuery } = require("~root/lib/database");

const deleteLocationQuery = ({ locationId }) =>
  submitQuery`DELETE FROM locations WHERE location_id = ${locationId};`;

module.exports = deleteLocationQuery;
