import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map} from 'rxjs';

//MODELO DE DATOS
export interface Buffy {
  _id: string;
  episodeName: string;
  seasonNumber: number;
  episodeNumber: number;
  airDate: string;
  description: string;
}
//SERVICIO INYECTABLE
@Injectable({
  providedIn: 'root'
})
export class BuffyService {
  //Ruta de la API
  private apiUrl='https://buffy-angel-api.onrender.com/api/buffy'
  buffy;

  constructor(private http: HttpClient) {

    this.buffy = toSignal(
      this.http.get<Buffy[]>(this.apiUrl).pipe(map(data =>data)),
      { initialValue: [] }
    );
  }
}


