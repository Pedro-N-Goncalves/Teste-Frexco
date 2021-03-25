import { PostgreProductRepository } from "../../../repositories/implementations/postgreProductRepository";
import { CreateProductCase } from "./CreateProduct";
import { CreateProductController } from "./CreateProductController";

const postgreProductRepository = new PostgreProductRepository ();
const createProductCase = new CreateProductCase (postgreProductRepository);
const createProductController = new CreateProductController (createProductCase);

export { createProductCase, createProductController };
