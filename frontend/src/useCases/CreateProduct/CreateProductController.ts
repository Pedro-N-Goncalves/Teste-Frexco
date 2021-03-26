import { CreateProductCase } from "./CreateProductCase";
import { IProductDTO } from "../../DTOs/ProductDTO";

export class CreateProductController {
  constructor (private createProductCase: CreateProductCase) {};

  async handle (data: IProductDTO): Promise <void> {
    try {
      await this.createProductCase.execute (data);
    } catch (err) {
      return err.message;
    }
  }
}