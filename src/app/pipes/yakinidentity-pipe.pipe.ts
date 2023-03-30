import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/Customer';

@Pipe({
  name: 'yakinidentityPipe'
})
export class YakinidentityPipePipe implements PipeTransform {

  transform(value: Customer[], filterYakinIdentity:string): Customer[] {
    
    console.log(filterYakinIdentity)
    filterYakinIdentity = filterYakinIdentity?filterYakinIdentity.toLocaleLowerCase():"";
    
    return filterYakinIdentity?value.filter((c:Customer)=>
    c.yakinNationalIdentity.toLocaleLowerCase().indexOf(filterYakinIdentity)!==-1):value;
  }

}
