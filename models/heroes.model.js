const sql = require("./db.js");

// constructor
const Heroes = function (heroes) {
  this.name = heroes.name;
  this.Intelligence = heroes.Intelligence;
  this.Force = heroes.Force;
  this.Resistance = heroes.Resistance;
  this.Role = heroes.Role;
};

Heroes.create = (newHeroes, result) => {
  sql.query("INSERT INTO heroes SET ?", newHeroes, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created heroes: ", { id: res.insertId, ...newHeroes });
    result(null, { id: res.insertId, ...newHeroes });
  });
};

Heroes.findById = (heroesId, result) => {
  sql.query(`SELECT * FROM heroes WHERE id = ${heroesId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found heroes: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Heroes.getAll = result => {
  sql.query("SELECT * FROM heroes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("heroes: ", res);
    result(null, res);
  });
};

Heroes.updateById = (id, heroes, result) => {
  sql.query(
    "UPDATE heroes SET name = ?, Intelligence = ?, Force = ? Resistance = ? Role = ? WHERE id = ?",
    [heroes.name, heroes.Intelligence, heroes.Force, heroes.Resistance, heroes.Role, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Customer with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated customer: ", { id: id, ...heroes });
      result(null, { id: id, ...heroes });
    }
  );
};

Heroes.remove = (id, result) => {
  sql.query("DELETE FROM heroes WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Customer with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted heroes with id: ", id);
    result(null, res);
  });
};

Heroes.removeAll = result => {
  sql.query("DELETE FROM heroes", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} heroes`);
    result(null, res);
  });
};

module.exports = Heroes;