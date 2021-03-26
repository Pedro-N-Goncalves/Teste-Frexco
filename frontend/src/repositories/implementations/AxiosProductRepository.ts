import { Product } from "../../entities/Product";
import { api } from "../../services/api";
import { IProductRepository } from "../ProductRepository";


export class AxiosProductRepository implements IProductRepository {
  async list (): Promise<Product[]> {
    const response = await api.get <Product[]> ('/products');
    const products: Product[] = response.data;

    return products;
  };

  async findByID (id: string): Promise <Product> {
    const response = await api.get (`/products/${id}`);
    const product: Product = response.data;

    return product;
  };
  
  async insert (product: Product): Promise <void> {
    await api.post ('/products', product);
  };

  async update (product: Product): Promise <void> {
    await api.put (`/products/${product.id}`, product);
  };

  async delete (id: string): Promise <void> {
    await api.delete (`/products/${id}`);
  };
};