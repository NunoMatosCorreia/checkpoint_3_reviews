const express = require("express");

const router = express.Router();

const { BeersController } = require("./controllers");

router.get("/beers", BeersController.getAllBeers);
router.post("/beers/:id", BeersController.updateBeers);

module.exports = router;
