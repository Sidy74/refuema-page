import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { RequestMakeComponent } from './components/request-make/request-make.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ArticleComponent } from './components/article/article.component';
import { ActualityComponent } from './components/actuality/actuality.component';

import { AdminRoutingModule } from './components/admin/admin-routing.module';
import { UserRoutingModule } from './components/user/user.routing.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'request-make', component: RequestMakeComponent },
  { path: 'passwordreset', component: PasswordResetComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'articles', component: ArticleComponent },
  { path: 'actualites', component: ActualityComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AdminRoutingModule,
    UserRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
