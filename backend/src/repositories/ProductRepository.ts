import { Product } from "../entities/product";

export interface IProductRepository {
  insert (product: Product): Promise <void>
  list (): Promise<Product[]>
  findByName (name: string): Promise <Product>
  findByID (id: string): Promise <Product>
  update (product: Product): Promise <void>
  delete (id: string): Promise <void>
}