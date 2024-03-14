import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AViewArticleComponent } from './a-view-article/a-view-article.component';
import { ArticleService } from 'src/app/core/_services/article/article.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgIf } from '@angular/common';
import { ConfirmDeleteModalComponent } from 'src/app/shared/confirm-delete-modal/confirm-delete-modal.component';
import { ToastService } from 'src/app/core/_services/toast/toast.service';
import { CustomDatePipe } from '../../../core/_pipes/custom-date/custom-date.pipe';

@Component({
  selector: 'app-a-articles',
  standalone: true,
  templateUrl: './a-articles.component.html',
  styleUrl: './a-articles.component.css',
  imports: [
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatGridListModule,
    NgIf,
    CustomDatePipe,
  ],
})
export class AArticlesComponent implements OnInit {
  constructor(
    private route: Router,
    public dialog: MatDialog,
    private articleService: ArticleService,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getArticles();
  }
  getArticles() {
    this.articleService.getAllArticle().subscribe({
      next: (value: any) => {
        this.dataSource = value.publication;
      },
    });
  }

  displayedColumns: string[] = ['articles'];
  dataSource = [];
  openAddArticle() {
    this.route.navigateByUrl('/admin/article/add');
  }
  openViewModal(article: any) {
    this.dialog.open(AViewArticleComponent, {
      panelClass: 'full-screen-modal',
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      
      data: { article: article },
    });
  }
  deteleArticle(id: number) {
    const dialogRef = this.dialog.open(ConfirmDeleteModalComponent, {
      data: {
        title: `Supprimer l'article`,
        message: `Voulez-vous supprimer cet'article ?`,
      },
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.articleService.deteleArticle(id).subscribe({
          next: (value: any) => {
            this.toastService.openSuccess(value.message.toString(), 'x');
            this.getArticles();
          },
          error: (err) => {
            this.toastService.openError(err.message, 'x');
          },
        });
      }
    });
  }
}
