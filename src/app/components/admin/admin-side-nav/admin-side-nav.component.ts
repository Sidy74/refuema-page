import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { EditorModule } from '@tinymce/tinymce-angular';
import {MatTooltipModule} from '@angular/material/tooltip';
import { AdminComponent } from "../admin.component";
import { AppbarAvatarComponent } from '../../appbar/appbar-avatar/appbar-avatar.component';
import { AdminSideNavAvatarComponent } from '../admin-side-nav-avatar/admin-side-nav-avatar.component';


@Component({
    selector: 'app-admin-side-nav',
    standalone: true,
    templateUrl: './admin-side-nav.component.html',
    styleUrl: './admin-side-nav.component.css',
    imports: [
        MatSidenavModule,
        EditorModule,
        FormsModule,
        NgIf,
        RouterLink,
        RouterLinkActive,
        RouterOutlet, MatTooltipModule,
        AdminComponent,AdminSideNavAvatarComponent
    ]
})
export class AdminSideNavComponent {
  showFiller = false;
  @Input() drawer!: MatDrawer;
  content = '';
  getEditorContent(): void {
    console.log(this.content);
  }
}
