import { PostgreProductRepository } from "../../../repositories/implementations/PostgreProductRepository";
import { GetProductCase } from "./GetProductCase";
import { GetProductController } from "./GetProductController";

const postgreProductRepository = new PostgreProductRepository ();
const getProductCase = new GetProductCase (postgreProductRepository);
const getProductController = new GetProductController (getProductCase);

export { getProductController };