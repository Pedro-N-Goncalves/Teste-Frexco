import { PostgreProductRepository } from "../../../repositories/implementations/PostgreProductRepository";
import { UpdateProductCase } from "./UpdateProduct";
import { UpdateProductController } from "./UpdateProductController";

const postgreProductRepository = new PostgreProductRepository ();
const updateProductCase = new UpdateProductCase (postgreProductRepository);
const updateProductController = new UpdateProductController (updateProductCase);

export { updateProductController };