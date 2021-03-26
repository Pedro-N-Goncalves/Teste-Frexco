import { UpdateProductCase } from "./UpdateProductCase";
import { IProductDTO } from "../../DTOs/ProductDTO";

export class UpdateProductController {
  constructor (private updateProductCase: UpdateProductCase) {};

  async handle (data: IProductDTO): Promise <void> {
    try {
      await this.updateProductCase.execute (data);
    } catch (err) {
      return err.message;
    }
  }
}