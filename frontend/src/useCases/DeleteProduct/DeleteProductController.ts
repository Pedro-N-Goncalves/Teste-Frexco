import { DeleteProductCase } from "./DeleteProductCase";

export class DeleteProductController {
  constructor (private deleteProductCase: DeleteProductCase) {};

  async handle (id: string): Promise <void> {
    try {
      await this.deleteProductCase.execute (id);
    } catch (err) {
      return err.message;
    }
  }
}