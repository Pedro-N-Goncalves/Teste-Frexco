import { IProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../entities/Product";

export class GetProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute (id: string): Promise <Product> {
    const product: Product = await this.productRepository.findByID (id);
    return product;
  };
}