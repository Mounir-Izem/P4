import type { RequestHandler } from "express";

import weaponsRepository from "./weaponsRepository";

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const weapons = await weaponsRepository.readAll();

    // Respond with the weapons in JSON format
    res.json(weapons);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific weapon based on the provided ID
    const weaponsId = Number(req.params.id);
    const weapons = await weaponsRepository.read(weaponsId);

    // If the weapon is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the weapon in JSON format
    if (weapons == null) {
      res.sendStatus(404);
    } else {
      res.json(weapons);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the weapon data from the request body
    const newWeapons = {
      name: req.body.name,
      description: req.body.description,
      type_weapon: req.body.type_weapon,
      caliber: req.body.caliber,
      weight: req.body.weight,
      length: req.body.length,
      category_id: req.body.category_id,
      manufacturer_id: req.body.manufacturer_id,
      picture_url: req.body.picture_url,
      date_of_manufacture: req.body.date_of_manufacture,
    };

    // Create the item
    const insertId = await weaponsRepository.create(newWeapons);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted weapon
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const weapons = {
      id: Number(req.params.id),
      name: req.body.name,
      description: req.body.description,
      type_weapon: req.body.type_weapon,
      caliber: req.body.caliber,
      weight: req.body.weight,
      length: req.body.length,
      category_id: req.body.category_id,
      manufacturer_id: req.body.manufacturer_id,
      picture_url: req.body.picture_url,
      date_of_manufacture: req.body.manufacturer_id,
    };
    const affectedRows = await weaponsRepository.update(weapons);
    if (affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    const weaponsId = Number(req.params.id);
    await weaponsRepository.delete(weaponsId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, edit, destroy };
