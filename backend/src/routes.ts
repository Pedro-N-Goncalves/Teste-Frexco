import { Router } from "express";
import { createProductController } from "./useCases/Product/CreateProduct";
import { deleteProductController } from "./useCases/Product/DeleteProduct";
import { getProductController } from "./useCases/Product/GetProduct";
import { listProductController } from "./useCases/Product/ListProduct";
import { updateProductController } from "./useCases/Product/UpdateProduct";

const router = Router ();

router.get ('/', (request, response) => {
  return response.status (200).send ('Desafio Frexco');
});

router.post ('/products', (request, response) => {
  createProductController.handle (request, response);
});

router.get ('/products', (request, response) => {
  listProductController.handle (request, response);
});

router.get ('/products/:id', (request, response) => {
  getProductController.handle (request, response);
});

router.put ('/products/:id', (request, response) => {
  updateProductController.handle (request, response);
});

router.delete ('/products/:id', (request, response) => {
  deleteProductController.handle (request, response);
});

export { router };