import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../models/Customer';

@Pipe({
  name: 'identityPipe'
})
export class IdentityPipePipe implements PipeTransform {

  transform(value: Customer[], filterIdentity:string): Customer[] {
    
    console.log(filterIdentity)
    filterIdentity = filterIdentity?filterIdentity.toLocaleLowerCase():"";
    
    return filterIdentity?value.filter((c:Customer)=>
    c.nationalIdentity.toLocaleLowerCase().indexOf(filterIdentity)!==-1):value;
  }

}
