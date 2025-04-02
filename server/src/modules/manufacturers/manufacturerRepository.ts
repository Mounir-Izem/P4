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

export default new ManufacturerRepository();
