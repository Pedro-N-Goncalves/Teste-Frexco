import { IProductRepository } from "../../repositories/ProductRepository";
import { Product } from "../../entities/Product";
import { IProductDTO } from "../../DTOs/ProductDTO";

export class UpdateProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute (data: IProductDTO): Promise<void> {
    const product = new Product (data);
    await this.productRepository.update (product);
  };
}