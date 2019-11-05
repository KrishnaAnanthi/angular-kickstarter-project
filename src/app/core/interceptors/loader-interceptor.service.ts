//Http interceptor to show/hide the loader before and after the request
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';
@Injectable({
  providedIn: 'root'
})

export class LoaderInterceptorService implements HttpInterceptor {
  constructor(private loaderService: LoaderService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(!(request.method === 'POST' && request.url.includes('/nonprofinet')) && !request.url.includes('device_data'))
    {
      this.showLoader();
    }
    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        this.onReqEnd();
      }
    },
      (err: any) => {
        this.onReqEnd();
      }));
  }

  private onReqEnd(): void {
    this.hideLoader();
  }
  private showLoader(): void {
    this.loaderService.show();
  }
  private hideLoader(): void {
    this.loaderService.hide();
  }
}