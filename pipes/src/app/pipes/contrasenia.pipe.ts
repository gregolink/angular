import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasenia'
})
export class ContraseniaPipe implements PipeTransform {

  transform(value: string, activo: boolean=true): string {
    if (activo){
      return value;
    }
    else{
      value = value.replace(/[a-zA-Z1-9]/gi, '*');
      return value;
    }
  }

}
