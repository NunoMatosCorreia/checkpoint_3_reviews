const AbstractManager = require("./AbstractManager");

class BeersManager extends AbstractManager {
  constructor() {
    super({ table: "beers" });
  }

  findAll() {
    return this.connection.query(`select * from  ${this.table}`);
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
