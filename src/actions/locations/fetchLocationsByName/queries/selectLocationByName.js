const { submitQuery } = require("~root/lib/database");

const selectLocationByName = ({ name }) =>
  submitQuery`SELECT location_id as id, name, country, photo, description FROM locations WHERE name LIKE ${"%" +
    name +
    "%"};`;

module.exports = selectLocationByName;
