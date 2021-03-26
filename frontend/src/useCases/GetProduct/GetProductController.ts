import { GetProductCase } from "./GetProductCase";
import { Product } from "../../entities/Product";

export class GetProductController {
  constructor (private getProductCase: GetProductCase) {};

  async handle (id: string): Promise <Product> {
    try {
      const product: Product = await this.getProductCase.execute (id);
      return product;
    } catch (err) {
      return err.message;
    }
  }
}