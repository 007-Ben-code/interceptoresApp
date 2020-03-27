import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      // indica que interceptor ha de implementarse
      useClass: InterceptorService,
      // para estar al pendiente de las peticiones que se realicen
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
