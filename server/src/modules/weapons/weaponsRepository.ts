import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Weapons = {
  id: number;
  name: string;
  description: string;
  caliber: string;
  weight: number;
  length: number;
  category_id: number;
  manufacturer_id: number;
  date_of_manufacture: number;
  type_weapon: string;
  picture_url: string;
};

class WeaponRepository {
  // The C of CRUD - Create operation

  async create(weapons: Omit<Weapons, "id">) {
    // Execute the SQL INSERT query to add a new weapon to the "weapons" table
    const [result] = await databaseClient.query<Result>(
      "insert into weapons (name, description, caliber, weight, length, category_id, manufacturer_id, date_of_manufacture, type_weapon, picture_url) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        weapons.name,
        weapons.description,
        weapons.caliber,
        weapons.weight,
        weapons.length,
        weapons.category_id,
        weapons.manufacturer_id,
        weapons.date_of_manufacture,
        weapons.type_weapon,
        weapons.picture_url,
      ],
    );

    // Return the ID of the newly inserted weapon
    return result.insertId;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        weapons.id,
        weapons.name,
        weapons.description,
        weapons.caliber,
        weapons.weight,
        weapons.length,
        categories.name AS category_name,
        manufacturer.name AS manufacturer_name,
        weapons.date_of_manufacture,
        weapons.type_weapon,
        weapons.picture_url
      FROM weapons
      LEFT JOIN categories ON weapons.category_id = categories.id
      LEFT JOIN manufacturer ON weapons.manufacturer_id = manufacturer.id
      WHERE weapons.id = ?`,
      [id],
    );

    return rows[0] || null;
  }
  // The Rs of CRUD - Read operations

  async readAll() {
    // Requête SQL avec jointures pour récupérer les noms des catégories et des fabricants
    const [rows] = await databaseClient.query<Rows>(
      `SELECT 
        weapons.id,
        weapons.name,
        weapons.description,
        weapons.caliber,
        weapons.weight,
        weapons.length,
        categories.name AS category_name,
        manufacturer.name AS manufacturer_name,
        weapons.date_of_manufacture,
        weapons.type_weapon,
        weapons.picture_url
      FROM weapons
      LEFT JOIN categories ON weapons.category_id = categories.id
      LEFT JOIN manufacturer ON weapons.manufacturer_id = manufacturer.id`,
    );

    // Retourne les résultats avec les noms des catégories et des fabricants
    return rows as Array<{
      id: number;
      name: string;
      description: string;
      caliber: string;
      weight: number;
      length: number;
      category_name: string;
      manufacturer_name: string;
      date_of_manufacture: number;
      type_weapon: string;
      picture_url: string;
    }>;
  }

  // The U of CRUD - Update operation
  async update(weapons: Weapons): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "UPDATE weapons SET name = ?, description = ?, type_weapon = ?, caliber = ?, category_id = ?, manufacturer_id = ?, date_of_manufacture = ?, picture_url = ?  WHERE id = ?",
      [
        weapons.name,
        weapons.description,
        weapons.type_weapon,
        weapons.caliber,
        weapons.category_id,
        weapons.manufacturer_id,
        weapons.date_of_manufacture,
        weapons.picture_url,
        weapons.id,
      ],
    );
    return result.affectedRows;
  }
  // The D of CRUD - Delete operation
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from weapons where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new WeaponRepository();
