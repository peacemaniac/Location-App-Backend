const handleAPIError = require("~root/utils/handleAPIError");
const createLocation = require("~root/actions/locations/createLocation");

const postLocation = async (req, res) => {
  const { name, country, photo, description } = req.body;
  try {
    const { locationId } = await createLocation({
      name,
      country,
      photo,
      description
    });

    res.status(201).send({ locationId });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = postLocation;
