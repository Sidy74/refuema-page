import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ShareUserInfosService } from '../../_services/share-user-infos/share-user-infos.service';
import { map } from 'rxjs';
import { UserRole } from '../_enums/user-role';

export const adminGuard: CanActivateFn = (route, state) => {
  const shareUserInfosService: ShareUserInfosService = inject(
    ShareUserInfosService
  );
  const router: Router = inject(Router);
  return shareUserInfosService.getUserRole().pipe(
    map((role) => {
      if (role === UserRole.Admin) {
        return true; // L'utilisateur est un administrateur, autoriser l'accès à la route
      } else {
        router.navigate(['/login']); // Rediriger vers une page d'accès refusé si l'utilisateur n'est pas un administrateur
        return false;
      }
    })
  );
};
