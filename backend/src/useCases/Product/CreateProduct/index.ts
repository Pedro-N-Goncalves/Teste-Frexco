import { PostgreProductRepository } from "../../../repositories/implementations/PostgreProductRepository";
import { CreateProductCase } from "./CreateProduct";
import { CreateProductController } from "./CreateProductController";

const postgreProductRepository = new PostgreProductRepository ();
const createProductCase = new CreateProductCase (postgreProductRepository);
const createProductController = new CreateProductController (createProductCase);

export { createProductController };
