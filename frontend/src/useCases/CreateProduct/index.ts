import { AxiosProductRepository } from '../../repositories/implementations/AxiosProductRepository';
import { CreateProductCase } from './CreateProductCase';
import { CreateProductController } from './CreateProductController';

const axiosProductRepository = new AxiosProductRepository ();
const createProductCase = new CreateProductCase (axiosProductRepository);
const createProductController = new CreateProductController (createProductCase);

export { createProductController };