import { CanActivateFn, Router } from '@angular/router';
import { ShareUserInfosService } from '../../_services/share-user-infos/share-user-infos.service';
import { inject } from '@angular/core';
import { UserRole } from '../_enums/user-role';
import { map } from 'rxjs';

export const userGuard: CanActivateFn = (route, state) => {
  const shareUserInfosService: ShareUserInfosService = inject(
    ShareUserInfosService
  );
  const router: Router = inject(Router);
  return shareUserInfosService.getUserRole().pipe(
    map((role) => {
      if (role === UserRole.User) {
        return true;
      } else {
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
