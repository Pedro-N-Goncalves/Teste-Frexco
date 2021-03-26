import { AxiosProductRepository } from "../../repositories/implementations/AxiosProductRepository";
import { ListProductCase } from "./ListProductCase";
import { ListProductController } from "./ListProductController";

const axiosProductRepository = new AxiosProductRepository ();
const listProductCase = new ListProductCase (axiosProductRepository);
const listProductController = new ListProductController (listProductCase);

export { listProductController };