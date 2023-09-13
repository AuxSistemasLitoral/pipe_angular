// Importamos el módulo 'Component' desde la librería '@angular/core'
import { Component } from '@angular/core';

// Decorador '@Component' que define la configuración del componente.
@Component({
  selector: 'app-numbers-page', // Selector utilizado para incrustar el componente en las plantillas HTML.
  templateUrl: './numbers-page.component.html', // Ruta al archivo HTML que contiene la plantilla del componente.
  styleUrls: ['./numbers-page.component.css'] // Rutas a los archivos CSS utilizados para el estilo del componente.
})
export class NumbersPageComponent {

  // Propiedad pública para almacenar el valor de ventas totales.
  public totalSells: number = 9191981.5498;

  // Propiedad pública para almacenar un valor porcentual.
  public percent: number = 0.6548;

}
