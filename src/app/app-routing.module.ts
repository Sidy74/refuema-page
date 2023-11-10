import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfilComponent } from './components/profil/profil.component';
import { CardComponent } from './components/card/card.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { authGuard } from './core/_helpers/auth.guard';
import { UserComponent } from './user/user.component';
import { PresentationComponent } from './components/presentation/presentation.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'presentation', component: PresentationComponent },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [authGuard],
    children: [
      { path: 'profil', component: ProfilComponent },
      { path: 'card', component: CardComponent },
    ],
  },

  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
