import { Product } from "../../../entities/product";
import { IProductRepository } from "../../../repositories/ProductRepository";
import { IProductDTO } from "../../../DTOs/ProductDTO";

export class UpdateProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute (data: IProductDTO) {
    const product = new Product (data);
    await this.productRepository.update (product);
  };
}