import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { adminGuard } from 'src/app/core/_helpers/_guards/admin.guard';
import { APagesComponent } from './a-pages/a-pages.component';
import { AHomeComponent } from 'src/app/components/admin/a-home/a-home.component';
import { AProfilComponent } from './a-profil/a-profil.component';
import { APublicationsComponent } from './a-publications/a-publications.component';
import { AAddPublicationComponent } from './a-publications/a-add-publication/a-add-publication.component';
import { APublicationsPublicComponent } from './a-publications/a-publications-public/a-publications-public.component';
import { APublicationsPriveeComponent } from './a-publications/a-publications-privee/a-publications-privee.component';
import { APublicationNoAccptedComponent } from './a-publications/a-publication-no-accpted/a-publication-no-accpted.component';
const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'home', component: AHomeComponent },

      { path: 'profil', component: AProfilComponent },

      { path: 'pages', component: APagesComponent },
      {
        path: 'publications',
        component: APublicationsComponent,
        children: [
          { path: 'public', component: APublicationsPublicComponent },
          { path: 'privee', component: APublicationsPriveeComponent },
          { path: 'not/accepted', component: APublicationNoAccptedComponent },
        ],
      },
      { path: 'publication/add', component: AAddPublicationComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
