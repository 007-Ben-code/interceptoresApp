import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  // un interceptor es un servico que intercepta las peticiones http
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error("Method not implemented.");
    // lo que ocurre aqui se aplica a todas las peticiones que implementen este interceptor
    console.log('paso por interceptor');

    // genera un header que se implementara en todas las peticiones
    const headers = new HttpHeaders({
      'token-usuario': 'qwertyuiop1234567890'
    });
    // se crea un clone del objeto req ya que al estar modificado no puede ser reutilizado
    const reqClone = req.clone({
      headers
    });

    // se regresa el nuevo objetoReq clonado
    return next.handle(reqClone).pipe(
      catchError( this.manejarError )
    );
  }


    // función para interceptar todas las peticiones fallidas
    manejarError( error: HttpErrorResponse) {
      console.log( error );
      console.log('sucedio error lo ');
      console.warn('Error warni');
      console.error('Error error');
      return throwError('Error PErsonalizado');
    }
}
