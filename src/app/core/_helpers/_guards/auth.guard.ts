import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../../_services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (loginService) {
    loginService.isLogged().subscribe({
      next: (value) => {
        if (!value && state.url.includes('/user/')) {
          router.navigateByUrl('/');
        }
      },
    });
    return true;
  } else return router.navigate(['login']);
};
