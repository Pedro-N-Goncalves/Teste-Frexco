import { Product } from "../../entities/product";
import pg from 'pg';
import { db } from "../../services/postgreDB";
import { IProductRepository } from "../ProductRepository";

export class PostgreProductRepository implements IProductRepository {
  async list (): Promise<Product[]> {
    const postgreDB = new pg.Client (db);
    await postgreDB.connect ();
    
    const listQuery = `SELECT * FROM products`;
    
    const result = await postgreDB.query (listQuery);
    const products: Product[] = result.rows;
    
    await postgreDB.end ();
    
    return products;
  };

  async findByName (name: string): Promise <Product> {
    const postgreDB = new pg.Client (db);
    await postgreDB.connect ();
    
    const listQuery = `SELECT * FROM products WHERE name=$1`;
    
    const result = await postgreDB.query (listQuery, [name]);
    const product: Product = result.rows [0];
    
    await postgreDB.end ();
    
    return product;
  };

  async findByID (id: string): Promise <Product> {
    const postgreDB = new pg.Client (db);
    await postgreDB.connect ();
    
    const listQuery = `SELECT * FROM products WHERE id=$1`;
    
    const result = await postgreDB.query (listQuery, [id]);
    const product: Product = result.rows [0];
    
    await postgreDB.end ();
    
    return product;
  };
  
  async insert (product: Product): Promise <void> {
    const postgreDB = new pg.Client (db);
    await postgreDB.connect ();

    const insertQuery = `
      INSERT INTO products (id, name, stock, price, createdAt, updatedAt) 
      VALUES ($1, $2, $3, $4, $5, $6)
    `;

    await postgreDB.query (insertQuery, [
      product.id,
      product.name,
      product.stock,
      product.price,
      product.createdAt,
      product.updatedAt
    ]);

    await postgreDB.end ();
  };

  async update (product: Product): Promise <void> {
    const postgreDB = new pg.Client (db);
    await postgreDB.connect ();

    const updateQuery = `
      UPDATE products 
      SET name = $1, stock = $2, price = $3, updatedAt = $4 
      WHERE id = $5
    `;

    await postgreDB.query (updateQuery, [
      product.name,
      product.stock,
      product.price,
      product.updatedAt,
      product.id
    ]);

    await postgreDB.end ();
  };

  async delete (id: string): Promise <void> {
    const postgreDB = new pg.Client (db);
    await postgreDB.connect ();
    
    const deleteQuery = `DELETE FROM products WHERE id=$1`;
    await postgreDB.query (deleteQuery, [id]);
    
    await postgreDB.end ();
  };
};