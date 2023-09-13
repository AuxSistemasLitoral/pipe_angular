// Importamos módulos necesarios desde Angular y RxJS.
import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

// Decorador '@Component' que define la configuración del componente.
@Component({
  selector: 'app-uncommon-page', // Selector utilizado para incrustar el componente en las plantillas HTML.
  templateUrl: './uncommon-page.component.html', // Ruta al archivo HTML que contiene la plantilla del componente.
  styleUrls: ['./uncommon-page.component.css'] // Rutas a los archivos CSS utilizados para el estilo del componente.
})
export class UncommonPageComponent {

  // Propiedades para i18nSelect Pipe
  public name: string = 'Muriel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  // Método para cambiar el cliente en i18nSelect Pipe
  changeCliente(): void {
    this.name = 'Estefany';
    this.gender = 'female';
  }

  // Propiedades para i18nPlural Pipe
  public clients: string[] = ['Maria', 'Carlos', 'Andres', 'Verónica', 'Jaime', 'Andrea', 'Felipe', 'Marcela', 'Jairo', 'Sebastian', 'Marcela'];
  public clientsMap = {
    '=0': 'no tenemos clientes pendientes',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  // Método para eliminar un cliente en i18nPlural Pipe
  deletedClient(): void {
    this.clients.shift();
  }

  // Propiedades para KeyValue Pipe y json pipe
  public person = {
    name: 'Mario',
    age: 38,
    address: 'Amagá, Antioquia (Colombia)'
  }

  // Propiedades para Async Pipe
  public myObsevableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
    }, 3500);
  })

}
