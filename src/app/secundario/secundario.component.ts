import { Component, effect } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BuffyService } from '../buffy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secundario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent {
  //grafica con chart.js
  chart: Chart | null = null;
  constructor(public buffyService: BuffyService) {
    // Esperamos a que la SIGNAL tenga datos
    effect(() => {
      const data = this.buffyService.buffy();
      if (!data || data.length === 0) return;
      // Obtenemos el canvas
      const ctx = document.getElementById('graficaBuffy') as HTMLCanvasElement;
      if (!ctx) return; // evita errores si aún no está en el DOM
      // Destruimos gráfica previa
      if (this.chart) {
        this.chart.destroy();
      }
      // Creamos la nueva gráfica
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map(ep => ep.episodeName),
          datasets: [
            {
              label: 'Número de episodio',
              data: data.map(ep => Number(ep.episodeNumber)),
              borderColor: 'rgba(88, 28, 135, 1)',
              backgroundColor: 'rgba(147, 51, 234, 0.25)',
              borderWidth: 2,
              fill: true,
              tension: 0.3,
              pointRadius: 4,
              pointBackgroundColor: 'rgba(88, 28, 135, 1)'
            }
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }
      });
    });
  }
}