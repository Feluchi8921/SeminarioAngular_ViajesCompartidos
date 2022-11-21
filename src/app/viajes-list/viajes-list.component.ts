import {Component} from '@angular/core';
import {Viajes} from './viajes';
@Component({
  selector: 'app-viajes-list',
  templateUrl: './viajes-list.component.html',
  styleUrls: ['./viajes-list.component.css']
})
export class ViajesListComponent {
  viajes : Viajes={
    salida: "Mar del Plata",
    destino:"Tandil",
    dia: "22/12/2022",
    horario:"11:00",
    lugares: 2,
    mascota:"perro/a",
    precio: 1200,
    datos:"mascota en canil",
    images:"assets/img/viaje1.jpg",
  }
}
