import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  login(data:any):Observable<any>{
    //Este servicio deberia llamar a la api de login de PAGOS 360 y devovler el token de autenticacion
    const apikey: string = 'NjQwNDMxNGI1YzU0YjllYmVhYjJiZDdmY2E5Y2EyMDg5ZDVlODFmNzRmMDc1OGJmMDY2OTY0NzlhNGJiZWQwNA';
    return of(apikey);
  }

  getToken(){
    return localStorage.getItem('api-key');
  }

}