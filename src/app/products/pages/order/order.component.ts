// Importamos módulos necesarios desde Angular y nuestras interfaces personalizadas.
import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

// Decorador '@Component' que define la configuración del componente.
@Component({
  selector: 'products-order', // Selector utilizado para incrustar el componente en las plantillas HTML.
  templateUrl: './order.component.html', // Ruta al archivo HTML que contiene la plantilla del componente.
  styles: [], // Estilos CSS específicos para este componente (en este caso, no se han definido estilos).
})
export class OrderComponent {

  // Propiedad booleana para rastrear si el texto debe mostrarse en mayúsculas o no.
  public isUpperCase: boolean = false;

  // Propiedad que almacena la clave por la que se debe ordenar la lista de héroes.
  public orderBy?: keyof Hero;

  // Arreglo de objetos 'Hero' que representa la lista de héroes.
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red,
    },
    {
      name: 'Robbin',
      canFly: false,
      color: Color.green,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green,
    },
  ];

  // Método que alterna el valor de 'isUpperCase' para cambiar entre mayúsculas y minúsculas en la interfaz.
  toggUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  // Método que establece la propiedad 'orderBy' para definir cómo se debe ordenar la lista de héroes.
  changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
