import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Categories = {
  id: number;
  name: string;
  description: string;
};

class CategoriesRepository {
  async create(category: Omit<Categories, "id">) {
    // Execute the SQL INSERT query to add a new categorie to the "categories" table
    const [result] = await databaseClient.query<Result>(
      "insert into categories (name, description) values (?, ?)",
      [category.name, category.description],
    );

    // Return the ID of the newly inserted category
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific categorie by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from categories where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the categorie
    return rows[0] as Categories;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "categories" table
    const [rows] = await databaseClient.query<Rows>("select * from categories");

    // Return the array of items
    return rows as Categories[];
  }

  // The U of CRUD - Update operation
  async update(categories: Categories): Promise<number> {
    const [result] = await databaseClient.query<Result>(
      "UPDATE categories SET name = ?, description = ? WHERE id = ?",
      [categories.name, categories.description, categories.id],
    );

    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID
  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "delete from categories where id = ?",
      [id],
    );
    return result.affectedRows;
  }
}

export default new CategoriesRepository();
