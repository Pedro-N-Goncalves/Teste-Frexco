import { PostgreProductRepository } from "../../../repositories/implementations/postgreProductRepository";
import { UpdateProductCase } from "./UpdateProduct";
import { UpdateProductController } from "./UpdateProductController";

const postgreProductRepository = new PostgreProductRepository ();
const updateProductCase = new UpdateProductCase (postgreProductRepository);
const updateProductController = new UpdateProductController (updateProductCase);

export { updateProductCase, updateProductController };