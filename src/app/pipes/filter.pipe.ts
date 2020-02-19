import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna:string): any[] {
    if (texto === '') {
      return arreglo
    }

    texto = texto.toLowerCase();

    return arreglo.filter(elemento => {
      return elemento[columna].toLowerCase().includes(texto);
    })

  }
  /**
   transform(value: any, args?: any): any {
    return null;
  }
   */

}
