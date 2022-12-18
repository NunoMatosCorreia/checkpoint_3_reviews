const express = require("express");

const router = express.Router();

const { BeersControllers } = require("./controllers");

router.get("/beers", BeersControllers.getAllBeers);
router.post("/beers/:id", BeersControllers.updateBeers);

module.exports = router;
