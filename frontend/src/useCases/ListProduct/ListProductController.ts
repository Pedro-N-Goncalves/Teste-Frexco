import { Product } from "../../entities/Product";
import { ListProductCase } from "./ListProductCase";

export class ListProductController {
  constructor (private listProductCase: ListProductCase) {};

  async handle (): Promise <Product[]> {
    try {
      const products: Product [] = await this.listProductCase.execute ();
      return products;
    } catch (err) {
      return err.message;
    }
  }
}