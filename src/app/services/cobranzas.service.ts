import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CobranzasService {
  
  constructor(private http:HttpClient) {}

    getReporteCobranzas(date:string):Observable<any>{      
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
      })
      return this.http.get<any>(`${environment.API_PRUEBAS_PAGOS360}/report/collection/${date}`,{headers});
    }

}
