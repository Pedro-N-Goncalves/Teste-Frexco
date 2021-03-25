import { Product } from "../../entities/product";
import { IProductRepository } from "../ProductRepository";

export class PostgreProductRepository implements IProductRepository {
  /*async findByName (name: string): Promise <Product> {
    console.log (name);
  };*/

  async insert (product: Product): Promise <void> {
    console.log (product);
  };

  /*async list (): Promise<Product[]> {

  };*/

  /*async update (product: Product): Promise <void> {

  };*/

  /*async delete (id: string): Promise <void> {

  };*/
};