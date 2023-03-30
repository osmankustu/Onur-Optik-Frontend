import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/Customer';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Customer[], filterText:string): Customer[] {
    
    filterText = filterText?filterText.toLocaleLowerCase():"";
    
    return filterText?value.filter((c:Customer)=>
    c.adi.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
