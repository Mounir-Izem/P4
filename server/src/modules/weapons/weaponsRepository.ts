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
};

class WeaponRepository {
  // The C of CRUD - Create operation

  async create(weapons: Omit<Weapons, "id">) {
    // Execute the SQL INSERT query to add a new weapon to the "weapons" table
    const [result] = await databaseClient.query<Result>(
      "insert into weapons (name, description, caliber, weight, length, category_id, manufacturer_id, date_of_manufacture, type_weapon) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
      ],
    );

    // Return the ID of the newly inserted weapon
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific weapon by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from weapons where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the weapons
    return rows[0] as Weapons;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all weapons from the "weapon" table
    const [rows] = await databaseClient.query<Rows>("select * from weapons");

    // Return the array of items
    return rows as Weapons[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new WeaponRepository();
