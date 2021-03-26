import { IProductRepository } from "../../../repositories/ProductRepository";
import { Product } from "../../../entities/product";

export class ListProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute () {
    const products: Product[] = await this.productRepository.list ();
    return products;
  };
}