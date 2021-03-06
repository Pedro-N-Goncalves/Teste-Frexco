import { Request, Response } from "express";
import { ListProductCase } from "./ListProductCase";
import { Product } from "../../../entities/product";

export class ListProductController {
  constructor (private listProductCase: ListProductCase) {};

  async handle (request: Request, response: Response): Promise <Response> {
    try {
      const products: Product[] = await this.listProductCase.execute ();
      
      return response.status (200).json (products);
    } catch (err) {
      return response.status (400).json ({
        message: err.message || 'Ocorreu um erro inesperado. Tente novamente!',
      });
    }
  }
}