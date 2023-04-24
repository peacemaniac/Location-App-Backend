const selectLocationByName = require("./queries/selectLocationByName");

const fetchLocationsByName = async ({ name }) => {
  console.log(`Name in fetchLocationsbyname, ${name}`);
  const locations = await selectLocationByName({ name });
  return { locations };
};

module.exports = fetchLocationsByName;
