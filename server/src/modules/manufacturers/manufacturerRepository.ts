import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Manufacturer = {
  id: number;
  name: string;
  country: string;
};

class ManufacturerRepository {
  // The C of CRUD - Create operation

  async create(manufacturer: Omit<Manufacturer, "id">) {
    // Execute the SQL INSERT query to add a new manufacturer to the "manufacturer" table
    const [result] = await databaseClient.query<Result>(
      "insert into manufacturer (name, country) values (?, ?)",
      [manufacturer.name, manufacturer.country],
    );

    // Return the ID of the newly inserted manufacturer
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific manufacturer by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from manufacturer where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the manufacturer
    return rows[0] as Manufacturer;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all manufacturers from the "manufacturers" table
    const [rows] = await databaseClient.query<Rows>(
      "select * from manufacturer",
    );

    // Return the array of items
    return rows as Manufacturer[];
  }

  // The U of CRUD - Update operation
  async update(manufacturer: Manufacturer): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "UPDATE manufacturer SET name = ?, country = ? WHERE id = ?",
      [manufacturer.name, manufacturer.country, manufacturer.id],
    );

    return result.affectedRows;
  }
  // The D of CRUD - Delete operation
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from manufacturer where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new ManufacturerRepository();
