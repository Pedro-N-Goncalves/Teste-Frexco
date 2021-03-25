import { format } from "date-fns";
import { uuid } from "uuidv4";
import { IProductDTO } from "../useCases/Product/ProductDTO";


export class Product {
  public readonly id!: string;
  public name!: string;
  public price!: number;
  public stock!: number;
  public createdAt!: string;
  public updatedAt!: string;

  constructor (props: IProductDTO) {
    Object.assign (this, props);

    this.id = uuid ();
    this.createdAt = format (new Date (), 'yyyy-MM-dd hh:mm:ss');
    this.updatedAt = format (new Date (), 'yyyy-MM-dd hh:mm:ss');
  }
}