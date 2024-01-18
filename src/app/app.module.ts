import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppbarModule } from './components/appbar/appbar.module';
import { MatIconModule } from '@angular/material/icon';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProfilModule } from './components/user/profil/profil/profil.module';
import { CardModule } from './components/user/card/card/card.module';
import { MiniArticleComponent } from './components/mini-article/mini-article.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { LoginModule } from './components/login/login/login.module';
import { SignUpModule } from './components/sign-up/sign-up/sign-up.module';
import { FooterComponent } from './components/footer/footer.component';
import { ObjectifsComponent } from './components/home/objectifs/objectifs.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { TokenInterceptor } from './core/_helpers/intercepteurs/token.interceptor';
import { ProgressBarModule } from './shared/progress-bar/progress-bar.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from './shared/shared.module';
import { RequestMakeComponent } from './components/request-make/request-make.component';
import { PasswordResetModule } from './components/password-reset/password-reset.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { ArticleComponent } from './components/article/article.component';
import { MiniMiniCardComponent } from './components/mini-mini-card/mini-mini-card.component';
import { DatePipe } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    ScrollToTopComponent,
    HomeComponent,
    ContactUsComponent,
    MiniArticleComponent,
    UserComponent,
    FooterComponent,
    ObjectifsComponent,
    PresentationComponent,
    RequestMakeComponent,
    ArticleComponent,
    MiniMiniCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppbarModule,
    ProfilModule,
    MatIconModule,
    LoginModule,
    SignUpModule,
    CardModule,
    SharedModule,
    ProgressBarModule,
    HttpClientModule,
    PasswordResetModule,
    NgbModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
