import { IProductRepository } from "../../repositories/ProductRepository";

export class DeleteProductCase {
  constructor (private productRepository: IProductRepository) {};

  async execute (id: string): Promise<void> {
    await this.productRepository.delete (id);
  };
}