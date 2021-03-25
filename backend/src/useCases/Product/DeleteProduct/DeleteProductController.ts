import { Request, Response } from "express";
import { DeleteProductCase } from "./DeleteProduct";

export class DeleteProductController {
  constructor (private deleteProductCase: DeleteProductCase) {};

  async handle (request: Request, response: Response): Promise <Response> {
    const { id } = request.params;

    try {
      await this.deleteProductCase.execute (id);
      
      return response.status (200).send ();
    } catch (err) {
      return response.status (400).json ({
        message: err.message || 'Ocorreu um erro inesperado. Tente novamente!',
      });
    }
  }
}