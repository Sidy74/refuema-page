import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ProfilComponent } from './components/user/profil/profil.component';
import { CardComponent } from './components/user/card/card.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { authGuard } from './core/_helpers/_guards/auth.guard';
import { UserComponent } from './components/user/user.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RequestMakeComponent } from './components/request-make/request-make.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { CvComponent } from './components/user/cv/cv.component';
import { ArticleComponent } from './components/article/article.component';

import { AdminRoutingModule } from './components/admin/admin-routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'request-make', component: RequestMakeComponent },
  { path: 'passwordreset', component: PasswordResetComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'articles', component: ArticleComponent },

  {
    path: 'user',
    component: UserComponent,
    canActivate: [authGuard],
    children: [
      { path: 'profil', component: ProfilComponent },
      { path: 'card', component: CardComponent },
      { path: 'cv', component: CvComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), AdminRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
