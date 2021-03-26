import { AxiosProductRepository } from "../../repositories/implementations/AxiosProductRepository";
import { GetProductCase } from "./GetProductCase";
import { GetProductController } from "./GetProductController";

const axiosProductRepository = new AxiosProductRepository ();
const getProductCase = new GetProductCase (axiosProductRepository);
const getProductController = new GetProductController (getProductCase);

export { getProductController };