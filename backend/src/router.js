const express = require("express");

const router = express.Router();

const { BeersControllers } = require("./controllers");

router.get("/beers", BeersControllers.getAllBeers);
router.post("/beers/:id", BeersControllers.updateBeers);
router.get("/beers/:id", BeersControllers.getByIdBeers);
router.post("/beers", BeersControllers.createNewBeer);
router.delete("/beers/:id", BeersControllers.deleteBeers);

module.exports = router;
