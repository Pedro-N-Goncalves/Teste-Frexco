import { Product } from "../entities/product";

export interface IProductRepository {
  //findByName (name: string): Promise <Product>
  insert (product: Product): Promise <void>
  //list (): Promise<Product[]>
  //update (product: Product): Promise <void>
  //delete (id: string): Promise <void>
}