import { PostgreProductRepository } from "../../../repositories/implementations/postgreProductRepository";
import { DeleteProductCase } from "./DeleteProduct";
import { DeleteProductController } from "./DeleteProductController";

const postgreProductRepository = new PostgreProductRepository ();
const deleteProductCase = new DeleteProductCase (postgreProductRepository);
const deleteProductController = new DeleteProductController (deleteProductCase);

export { deleteProductCase, deleteProductController };