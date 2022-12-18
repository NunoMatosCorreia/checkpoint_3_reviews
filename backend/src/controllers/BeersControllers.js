const models = require("../models");

class BeersControllers {
  static getAllBeers = (req, res) => {
    models.beers
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
          res.status(404).send(`Can't find Beer with ${item.id}`);
        } else {
          res.status(204).send(`Update Name of Beer with ${item.id}`);
        }
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };
}

module.exports = BeersControllers;
