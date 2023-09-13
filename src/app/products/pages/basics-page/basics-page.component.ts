// Importamos el módulo 'Component' desde la librería '@angular/core'
import { Component } from '@angular/core';

// Decorador '@Component' que define la configuración del componente.
@Component({
  selector: 'app-basics-page', // Selector utilizado para incrustar el componente en las plantillas HTML.
  templateUrl: './basics-page.component.html', // Ruta al archivo HTML que contiene la plantilla del componente.
  styleUrls: ['./basics-page.component.css'] // Rutas a los archivos CSS utilizados para el estilo del componente.
})
export class BasicsPageComponent {

  // Propiedades públicas para almacenar diferentes cadenas de caracteres y una fecha.
  public nameLower: string = 'muriel'; // Cadena de caracteres en minúsculas.
  public nameUpper: string = 'MURIEL'; // Cadena de caracteres en mayúsculas.
  public fullName: string = 'mUrIeL'; // Cadena de caracteres con formato mixto.

  public custumDate: Date = new Date(); // Objeto Date que almacena la fecha y hora actual.

}
