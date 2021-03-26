import { Request, Response } from "express";
import { GetProductCase } from "./GetProductCase";
import { Product } from "../../../entities/product";

export class GetProductController {
  constructor (private getProductCase: GetProductCase) {};

  async handle (request: Request, response: Response): Promise <Response> {
    const { id } = request.params;

    try {
      const product: Product = await this.getProductCase.execute (id);
      
      return response.status (200).json (product);
    } catch (err) {
      return response.status (400).json ({
        message: err.message || 'Ocorreu um erro inesperado. Tente novamente!',
      });
    }
  }
}