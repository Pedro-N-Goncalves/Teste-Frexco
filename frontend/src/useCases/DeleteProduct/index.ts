import { AxiosProductRepository } from "../../repositories/implementations/AxiosProductRepository";
import { DeleteProductCase } from "./DeleteProductCase";
import { DeleteProductController } from "./DeleteProductController";

const axiosProductRepository = new AxiosProductRepository ();
const deleteProductCase = new DeleteProductCase (axiosProductRepository);
const deleteProductController = new DeleteProductController (deleteProductCase);

export { deleteProductController };