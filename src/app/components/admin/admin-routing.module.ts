import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AArticlesComponent } from './a-articles/a-articles.component';
import { AdminComponent } from './admin.component';
import { adminGuard } from 'src/app/core/_helpers/_guards/admin.guard';
import { APagesComponent } from './a-pages/a-pages.component';
import { AHomeComponent } from 'src/app/components/admin/a-home/a-home.component';
import { AAddArticleComponent } from './a-articles/a-add-article/a-add-article.component';
import { AProfilComponent } from './a-profil/a-profil.component';
import { APublicationsComponent } from './a-publications/a-publications.component';
const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'home', component: AHomeComponent },
      {
        path: 'articles',
        component: AArticlesComponent,
      },
      { path: 'profil', component: AProfilComponent },
      {
        path: 'article/add',
        component: AAddArticleComponent,
      },
      { path: 'pages', component: APagesComponent },
      { path: 'publications', component: APublicationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
