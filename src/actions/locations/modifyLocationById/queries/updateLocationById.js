const { submitQuery, sql, sqlReduce } = require("~root/lib/database");

const updateLocationById = ({
  locationId,
  name = null,
  country = null,
  photo = null,
  description = null
}) => {
  const updates = [];

  if (name !== null) {
    updates.push(sql`name = ${name}`);
  }

  if (country !== null) {
    updates.push(sql`country = ${country}`);
  }

  if (photo !== null) {
    updates.push(sql`photo = ${photo}`);
  }

  if (description !== null) {
    updates.push(sql`description = ${description}`);
  }

  if (updates.length !== 0) {
    return submitQuery`
      UPDATE locations
      SET ${updates.reduce(sqlReduce)}
      WHERE location_id = ${locationId};
      `;
  }

  return Promise.resolve();
};

module.exports = updateLocationById;
