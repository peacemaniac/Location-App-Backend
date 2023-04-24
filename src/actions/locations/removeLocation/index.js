const deleteLocationQuery = require("./queries/deleteLocationQuery");

const removeLocation = async ({ locationId }) => {
  const deletedLocation = await deleteLocationQuery({ locationId });

  return { deletedLocation };
};

module.exports = removeLocation;
