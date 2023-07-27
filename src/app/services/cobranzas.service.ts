import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CobranzasService {
  
  constructor(private http:HttpClient, private _authService:AuthService) {}

    getReporteCobranzas(date:string):Observable<any>{      
      const token = this._authService.getToken()
      const headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization':`Bearer ${token}`
      })
      return this.http.get<any>(`${environment.API_PRUEBAS_PAGOS360}/report/collection/${date}`,{headers});
    }

}
