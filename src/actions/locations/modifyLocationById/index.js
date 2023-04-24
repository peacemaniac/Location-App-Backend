const updateLocationById = require("./queries/updateLocationById");

const modifyLocationById = async ({
  locationId,
  name,
  country,
  photo,
  description
}) => {
  const location = await updateLocationById({
    locationId,
    name,
    country,
    photo,
    description
  });

  return { location };
};

module.exports = modifyLocationById;
