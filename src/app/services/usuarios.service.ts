import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    public http: HttpClient
  ) { }
  obtenerUsuarios() {
    let params = new HttpParams().append('page', '2');
    params =params.append('nombre', 'Oggun');
    // const headers = new HttpHeaders({
    //   'token-usuario': 'qwertyuiop1234567890'
    // });
    return this.http.get(`https://re00qres.in/api/user`, { params }).pipe(
      map( resp => {
        console.log( resp );
        return resp['data'];
      })
    );
  }
}
