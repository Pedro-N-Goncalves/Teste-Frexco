import { IProductDTO } from "../DTOs/ProductDTO";

export class Product {
  public readonly id!: string;
  public name!: string;
  public price!: number;
  public stock!: number;
  public createdAt!: string;
  public updatedAt!: string;

  constructor (props: IProductDTO) {
    Object.assign (this, props);
  }
}