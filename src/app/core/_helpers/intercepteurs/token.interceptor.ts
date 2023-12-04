import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../../_services/loading.service';
import { UserTokenService } from '../../_services/user-token.service';

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
      const authReq = request.clone({
        headers: request.headers.set('Authorization', token),
      });
    }

    return next.handle(request);
  }
}
