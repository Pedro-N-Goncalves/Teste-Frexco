import { PostgreProductRepository } from "../../../repositories/implementations/PostgreProductRepository";
import { ListProductCase } from "./ListProductCase";
import { ListProductController } from "./ListProductController";

const postgreProductRepository = new PostgreProductRepository ();
const listProductCase = new ListProductCase (postgreProductRepository);
const listProductController = new ListProductController (listProductCase);

export { listProductController };