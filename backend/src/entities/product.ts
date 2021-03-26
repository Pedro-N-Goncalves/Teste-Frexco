import { formatISO } from "date-fns";
import { IProductDTO } from "../DTOs/ProductDTO";
import { v4 as uuidv4 } from 'uuid';

export class Product {
  public readonly id!: string;
  public name!: string;
  public price!: number;
  public stock!: number;
  public createdAt!: string;
  public updatedAt!: string;

  constructor (props: IProductDTO) {
    Object.assign (this, props);

    if (!this.id)
      this.id = uuidv4 ();

    if (!this.createdAt)
      this.createdAt = formatISO (new Date ());

    this.updatedAt = formatISO (new Date ());
  }
}