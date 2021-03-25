import { Router } from "express";
import { createProductController } from "./useCases/Product/CreateProduct";

const router = Router ();

router.get ('/', (request, response) => {
  return response.status (200).send ('Desafio Frexco');
});

router.post ('/products', (request, response) => {
  createProductController.handle (request, response);
});

export { router };