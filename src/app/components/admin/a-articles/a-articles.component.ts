import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AViewArticleComponent } from './a-view-article/a-view-article.component';

@Component({
  selector: 'app-a-articles',
  standalone: true,
  imports: [MatTableModule, MatMenuModule, MatIconModule],
  templateUrl: './a-articles.component.html',
  styleUrl: './a-articles.component.css',
})
export class AArticlesComponent {
  constructor(private route: Router, public dialog: MatDialog) {}

  displayedColumns: string[] = ['position', 'articles'];
  dataSource = [
    { position: 1, article: 'articles1' },
    { position: 2, article: 'articles2' },
    { position: 3, article: 'articles3' },
    { position: 4, article: 'articles4' },
    { position: 5, article: 'articles5' },
    { position: 6, article: 'articles6' },
    { position: 7, article: 'articles7' },
    { position: 8, article: 'articles8' },
  ];
  openAddArticle() {
    this.route.navigateByUrl('/admin/article/add');
  }
  openViewModal() {
    this.dialog.open(AViewArticleComponent, {
      width: '90vw',
      data: { article: 'this.article' },
    });
  }
}
