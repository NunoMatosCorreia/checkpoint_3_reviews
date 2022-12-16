const AbstractManager = require("./AbstractManager");

class BeersManager extends AbstractManager {
  constructor() {
    super({ table: "beers" });
  }

  update(item) {
    const { name, id } = item;
    return this.connection.query(
      `UPDATE ${this.table} SET name = ? WHERE id = ?`,
      [name, id]
    );
  }
}

module.exports = BeersManager;
