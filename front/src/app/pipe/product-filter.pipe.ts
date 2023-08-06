import { Pipe, PipeTransform } from '@angular/core';
import { ProductItem } from '../models/product-item';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: ProductItem, ...args: unknown[]): unknown {
    return null;
  }

}
