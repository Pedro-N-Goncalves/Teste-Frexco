import { formatISO } from "date-fns";
import { Request, Response } from "express";
import { UpdateProductCase } from "./UpdateProduct";

export class UpdateProductController {
  constructor (private updateProductCase: UpdateProductCase) {};

  async handle (request:  Request, response: Response): Promise <Response> {
    const { name, stock, price } = request.body;
    const { id } = request.params;

    try {
      await this.updateProductCase.execute ({
        id,
        name,
        stock,
        price
      });
      
      return response.status (200).send ();
    } catch (err) {
      return response.status (400).json ({
        message: err.message || 'Ocorreu um erro inesperado. Tente novamente!',
      });
    }
  }
}