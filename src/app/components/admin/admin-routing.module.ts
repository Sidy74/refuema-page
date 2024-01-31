// admin-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AArticlesComponent } from './a-articles/a-articles.component';
import { AdminComponent } from './admin.component';
import { adminGuard } from 'src/app/core/_helpers/_guards/admin.guard';
import { APagesComponent } from './a-pages/a-pages.component';
import { AHomeComponent } from 'src/app/a-home/a-home.component';
const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'home', component: AHomeComponent },
      { path: 'articles', component: AArticlesComponent },
      { path: 'pages', component: APagesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
