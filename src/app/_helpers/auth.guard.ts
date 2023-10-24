import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../core/_services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userAuthService = inject(UserAuthService);
  const router = inject(Router);
  if (userAuthService.isUserAuthService) return true;
  else return router.navigate(['login']);
};
