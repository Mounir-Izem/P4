import type { RequestHandler } from "express";

import manufacturerRepository from "./manufacturerRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all weapons
    const manufacturers = await manufacturerRepository.readAll();

    // Respond with the manufacturers in JSON format
    res.json(manufacturers);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific manufacturer based on the provided ID
    const manufacturerId = Number(req.params.id);
    const manufacturer = await manufacturerRepository.read(manufacturerId);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (manufacturer == null) {
      res.sendStatus(404);
    } else {
      res.json(manufacturer);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the manufacturer data from the request body
    const newManufacturer = {
      name: req.body.name,
      country: req.body.country,
    };

    // Create the item
    const insertId = await manufacturerRepository.create(newManufacturer);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted manufacturer
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

export default { browse, read, add };
