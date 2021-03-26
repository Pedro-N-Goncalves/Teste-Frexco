import { IProductRepository } from "../../repositories/ProductRepository";

export class ListProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute () {
    const products = await this.productRepository.list ();
    return products;
  };
}