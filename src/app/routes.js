const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const { ADMIN } = require("~root/constants/userTypes");

const postLocation = require("~root/app/controllers/locations/postLocation");
const getAllLocations = require("~root/app/controllers/locations/getAllLocations");
const getLocationById = require("~root/app/controllers/locations/getLocationById");
const deletedLocationById = require("~root/app/controllers/locations/deleteLocationById");
const updateLocationById = require("~root/app/controllers/locations/updateLocationById");
const getLocationsByName = require("~root/app/controllers/locations/getLocationsByName");
const router = express.Router();

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);
router.post("/locations", postLocation);
router.get("/locations", getAllLocations);
router.get("/locations/search", getLocationsByName);
router.get("/locations/:locationId", getLocationById);
router.delete("/locations/:locationId", deletedLocationById);
router.patch("/locations/:locationId", updateLocationById);

module.exports = router;
