import { Product } from "../../../entities/product";
import { IProductRepository } from "../../../repositories/ProductRepository";
import { IProductDTO } from "../ProductDTO";

export class CreateProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute (data: IProductDTO) {
    const productExists = this.productRepository.findByName (data.name);

    if (productExists) {
      throw new Error ('Este produto já está cadastrado');
    }

    const product = new Product (data);
    await this.productRepository.insert (product);
  };
}