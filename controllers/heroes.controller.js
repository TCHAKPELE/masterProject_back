const Heroes = require("../models/heroes.model.js");

// Create and Save a new Heores
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a Heroes
    const heroes = new Heroes({
        Nom: req.body.Nom,
        Attaque: req.body.Attaque,
        Defense: req.body.Defense,
        Statut: req.body.Statut,
        Type: req.body.Type,
        Vie: req.body.Vie
    });

    // Save Heroes in the database
    heroes.create(heroes, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Heroes."
            });
        else res.send(data);
    });

};

// Retrieve all Heores from the database.
exports.findAll = (req, res) => {

    Heroes.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving heroes."
            });
        else res.send(data);
    });

};

// Find a single Heroes with a customerId
exports.findOne = (req, res) => {

    Heroes.findById(req.params.heroesId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Heroes with id ${req.params.heroesId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Heroes with id " + req.params.heroesId
                });
            }
        } else res.send(data);
    });


};

// Update a Heroes identified by the heroesId in the request
exports.update = (req, res) => {

    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    Heroes.updateById(
        req.params.heroesId,
        new Heroes(req.body),
        (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Heroes with id ${req.params.heroesId}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Heroes with id " + req.params.heroesId
                    });
                }
            } else res.send(data);
        }
    );

};

// Delete a Heroes with the specified heroesId in the request
exports.delete = (req, res) => {

    Heroes.remove(req.params.heroesId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Heroes with id ${req.params.heroesId}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Heroes with id " + req.params.heroesId
                });
            }
        } else res.send({ message: `Heroes was deleted successfully!` });
    });

};

// Delete all Heroes from the database.
exports.deleteAll = (req, res) => {

    Heroes.removeAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all heroes."
            });
        else res.send({ message: `All Heroes were deleted successfully!` });
    });

};