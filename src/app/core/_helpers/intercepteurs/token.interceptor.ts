import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../../_services/loading.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let x = next.handle(request);
    //Change is loading state when request is sended or completed
    this.loadingService.isLoading.next(true);
    x.subscribe((val) => {
    //  this.loadingService.isLoading.next(false);
    });
    return x;
  }
}
