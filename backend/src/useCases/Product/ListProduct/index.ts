import { PostgreProductRepository } from "../../../repositories/implementations/PostgreProductRepository";
import { ListProductCase } from "./ListProduct";
import { ListProductController } from "./ListProductController";

const postgreProductRepository = new PostgreProductRepository ();
const listProductCase = new ListProductCase (postgreProductRepository);
const listProductController = new ListProductController (listProductCase);

export { listProductController };