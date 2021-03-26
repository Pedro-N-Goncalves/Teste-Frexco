import { AxiosProductRepository } from '../../repositories/implementations/AxiosProductRepository';
import { UpdateProductCase } from './UpdateProductCase';
import { UpdateProductController } from './UpdateProductController';

const axiosProductRepository = new AxiosProductRepository ();
const updateProductCase = new UpdateProductCase (axiosProductRepository);
const updateProductController = new UpdateProductController (updateProductCase);

export { updateProductController };