import { Pipe, PipeTransform} from '@angular/core';


@Pipe({
  name: 'canfly' // Nombre del pipe que se utilizará en las plantillas HTML.
})
export class cantFlyPipe implements PipeTransform{
  transform(value: boolean): 'Puede volar' | 'No puede volar'{
    // La función transform toma un valor booleano y devuelve una cadena de texto basada en ese valor.
    // Si el valor es true, devuelve 'Puede volar'. Si el valor es false, devuelve 'No puede volar'.
      return value ? 'Puede volar' : 'No puede volar'

  }
}



