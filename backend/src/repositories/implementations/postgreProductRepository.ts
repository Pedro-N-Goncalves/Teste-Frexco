import { Product } from "../../entities/product";
import { IProductRepository } from "../ProductRepository";

export class PostgreProductRepository implements IProductRepository {
  private products: Product[] = [
    {
      name: 'Intel core i7 10700k',
      stock: 20,
      price: 2.999,
      id: '3d3ceb46-d9e0-4416-bddd-3ee24390b80a',
      createdAt: '2021-03-24 11:22:55',
      updatedAt: '2021-03-24 11:22:55' 
    },
    {
      name: 'Intel core i9 10900k',
      stock: 10,
      price: 3.999,
      id: '2v3dfb46-d2c1-3214-bdad-3cd25390w84x',
      createdAt: '2021-03-24 11:35:55',
      updatedAt: '2021-03-24 11:35:55' 
    }
  ];

  async findByName (name: string): Promise <Product> {
    const product = this.products.find (product => product.name === name);
    return product;
  };

  async insert (product: Product): Promise <void> {
    this.products.push (product);
  };

  async list (): Promise<Product[]> {
    return this.products;
  };

  async update (product: Product): Promise <void> {
    console.log ('*****UPDATE*****');
  };

  async delete (id: string): Promise <void> {
    console.log ('*****DELETE*****');
  };
};