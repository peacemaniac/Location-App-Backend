modifyLocationById = require("~root/actions/locations/modifyLocationById");
const handleAPIError = require("~root/utils/handleAPIError");

const patchLocationById = async (req, res) => {
  const { locationId } = req.params;
  const { name, country, photo, description } = req.body;
  console.log(req.body);
  try {
    const { location } = await modifyLocationById({
      locationId,
      name,
      country,
      photo,
      description
    });

    res.status(201).send({ location });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = patchLocationById;
