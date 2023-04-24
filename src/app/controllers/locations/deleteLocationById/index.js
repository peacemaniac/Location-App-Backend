const handleAPIError = require("~root/lib/database");

const removeLocation = require("~root/actions/locations/removeLocation");

const deletedLocationById = async (req, res) => {
  const { locationId } = req.params;

  try {
    const { deletedLocation } = await removeLocation({ locationId });

    res.status(200).send({ deletedLocation });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deletedLocationById;
