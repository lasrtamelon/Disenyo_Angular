import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';  
import { BuffyService } from '../buffy.service';
import { SecundarioComponent } from "../secundario/secundario.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, SecundarioComponent],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  title = 'Api Buffy con TailWind CSS y grafica';

  mostrarGrafica = signal(false);   

  constructor(public buffyService: BuffyService) {}

  toggleGrafica() {
    this.mostrarGrafica.update(v => !v); // alterna mostrar/ocultar
  }
}
