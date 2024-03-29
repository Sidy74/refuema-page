import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserTokenService } from '../../_services/user-token.service';
import { LoadingService } from '../../_services/loading/loading.service';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private userTokenService: UserTokenService
  ) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    //Change is-loading state when request is sended or completed
    this.loadingService.isLoading.next(true);
    const token = this.userTokenService.getTokenInLocalStorage();
    if (token) {
      const clone = request.clone({
        headers: request.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`),
      });
      return next.handle(clone);
    } else {
      return next.handle(request);
    }
  }
}
