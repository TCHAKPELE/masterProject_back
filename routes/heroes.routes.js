module.exports = app => {
    const heroes = require("../controllers/heroes.controller.js");

    // Create a new Heroes
    app.post("/heroes", heroes.create);

    // Retrieve all Heroes
    app.get("/heroes", heroes.findAll);

    // Retrieve a single Heroes with heroesId
    app.get("/heroes/:heroesId", heroes.findOne);

    // Update a Heroes with heroesId
    app.put("/heroes/:heroesId", heroes.update);

    // Delete a Heroes with heroesId
    app.delete("/heroes/:heroesId", heroes.delete);

    // Delete all heroes
    app.delete("/heroes", heroes.deleteAll);
};