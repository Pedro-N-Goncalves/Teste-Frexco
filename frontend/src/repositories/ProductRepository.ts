import { Product } from "../entities/Product";

export interface IProductRepository {
  insert (product: Product): Promise <void>
  list (): Promise<Product[]>
  findByID (id: string): Promise <Product>
  update (product: Product): Promise <void>
  delete (id: string): Promise <void>
}