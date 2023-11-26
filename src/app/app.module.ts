import { LOCALE_ID, NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppbarModule,
    ProfilModule,
    MatIconModule,
    LoginModule,
    SignUpModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    { provide: LOCALE_ID, useValue: 'fr' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
