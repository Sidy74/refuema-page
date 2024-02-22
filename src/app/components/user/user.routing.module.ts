import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from 'src/app/core/_helpers/_guards/auth.guard';
import { CardComponent } from './card/card.component';
import { CvComponent } from './cv/cv.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user.component';
import { userGuard } from 'src/app/core/_helpers/_guards/user.guard';

const userRoutes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [authGuard, userGuard],
    children: [
      { path: 'profil', component: ProfilComponent },
      { path: 'card', component: CardComponent },
      { path: 'cv', component: CvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
