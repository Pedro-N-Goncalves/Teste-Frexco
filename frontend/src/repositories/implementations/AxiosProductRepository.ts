import { Product } from "../../entities/Product";
import { api } from "../../services/api";
import { IProductRepository } from "../ProductRepository";


export class AxiosProductRepository implements IProductRepository {
  async list (): Promise<Product[]> {
    const response = await api.get <Product[]> ('/products');
    const products: Product[] = response.data;

    return products;
  };

  //async findByName (name: string): Promise <Product> {
    
  //};
  
  async insert (product: Product): Promise <void> {

  };

  async update (product: Product): Promise <void> {

  };

  async delete (id: string): Promise <void> {
    await api.delete (`/products/${id}`);
  };
};