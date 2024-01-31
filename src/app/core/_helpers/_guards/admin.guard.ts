import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  //  if (state.url.includes('/admin/')) {
  //     return router.navigateByUrl('/');
  //   }
  return true;
};
