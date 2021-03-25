import { PostgreProductRepository } from "../../../repositories/implementations/PostgreProductRepository";
import { DeleteProductCase } from "./DeleteProduct";
import { DeleteProductController } from "./DeleteProductController";

const postgreProductRepository = new PostgreProductRepository ();
const deleteProductCase = new DeleteProductCase (postgreProductRepository);
const deleteProductController = new DeleteProductController (deleteProductCase);

export { deleteProductController };