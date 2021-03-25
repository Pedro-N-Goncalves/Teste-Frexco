import { Request, Response } from "express";
import { CreateProductCase } from "./CreateProduct";

export class CreateProductController {
  constructor (private createProductCase: CreateProductCase) {};

  async handle (request:  Request, response: Response): Promise <Response> {
    const { name, stock, price } = request.body;

    try {
      await this.createProductCase.execute ({
        name,
        stock,
        price
      });

      return response.status (201).send ();
    } catch (err) {
      return response.status (400).json ({
        message: err.message || 'Ocorreu um erro inesperado. Tente novamente!',
      });
    }
  }
}