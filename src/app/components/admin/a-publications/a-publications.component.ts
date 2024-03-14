import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-publications',
  standalone: true,
  imports: [NgIf],
  templateUrl: './a-publications.component.html',
  styleUrl: './a-publications.component.css',
})
export class APublicationsComponent {
  dataSource: any = [];
  constructor(private router: Router) {}
  openAddPublication() {
    this.router.navigateByUrl('admin/publication/add');
  }
}
