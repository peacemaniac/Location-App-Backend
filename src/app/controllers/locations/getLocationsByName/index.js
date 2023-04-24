const fetchLocationsByName = require("~root/actions/locations/fetchLocationsByName");

const handleAPIError = require("~root/utils/handleAPIError");

const getLocationsByName = async (req, res) => {
  const name = req.query.q;

  console.log("Name:", name);

  //   res.send({ name: "test" });

  try {
    const { locations } = await fetchLocationsByName({ name });

    res.status(200).send({ locations });
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getLocationsByName;
