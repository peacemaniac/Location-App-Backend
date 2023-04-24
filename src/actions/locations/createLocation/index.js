const insertLocation = require("./queries/insertLocation");

const createLocation = async ({ name, country, photo, description }) => {
  const locationId = await insertLocation({
    name,
    country,
    photo,
    description
  });
  return { locationId };
};

module.exports = createLocation;
