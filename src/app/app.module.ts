import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppbarModule } from './components/appbar/appbar.module';
import { MatIconModule } from '@angular/material/icon';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { ProfilModule } from './components/profil/profil/profil.module';
import { CardModule } from './components/card/card/card.module';
import { MiniArticleComponent } from './mini-article/mini-article.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollToTopComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    ContactUsComponent,
    AboutComponent,
    MiniArticleComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppbarModule,
    ProfilModule,
    MatIconModule,
    CardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
