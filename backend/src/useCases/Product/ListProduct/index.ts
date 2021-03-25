import { PostgreProductRepository } from "../../../repositories/implementations/postgreProductRepository";
import { ListProductCase } from "./ListProduct";
import { ListProductController } from "./ListProductController";

const postgreProductRepository = new PostgreProductRepository ();
const listProductCase = new ListProductCase (postgreProductRepository);
const listProductController = new ListProductController (listProductCase);

export { listProductCase, listProductController };