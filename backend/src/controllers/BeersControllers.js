const models = require("../models");

class BeersController {
  static getAllBeers = (req, res) => {
    models
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static updateBeers = (req, res) => {
    const item = req.body;

    item.id = parseInt(req.params.id, 10);

    models.beers
      .update(item)
      .then(([result]) => {
        if (result.affectedRows === 0) {
          res.status(404).send("Can't find Beer with id: ", item.id);
        } else {
          res.status(204).send("Update Name of Beer with id: ", item.id);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = BeersController;
