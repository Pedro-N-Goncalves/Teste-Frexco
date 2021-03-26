import { IProductRepository } from "../../../repositories/ProductRepository";
import { Product } from "../../../entities/product";

export class GetProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute (id: string) {
    const product: Product = await this.productRepository.findByID (id);
    return product;
  };
}