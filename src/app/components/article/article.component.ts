import {
  AfterContentInit,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Article } from 'src/app/core/_models/article.model';
import { MiniMiniCardComponent } from '../mini-mini-card/mini-mini-card.component';
import { MiniArticleComponent } from '../mini-article/mini-article.component';
import { NgIf, NgFor } from '@angular/common';
import { PublicationService } from 'src/app/core/_services/publication/publication.service';
import { Subscription } from 'rxjs';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';
import { ArticleService } from 'src/app/core/_services/article/article.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/core/_services/images/image.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    MiniArticleComponent,
    MiniMiniCardComponent,
    CustomDatePipe,
  ],
})
export class ArticleComponent implements OnInit, OnDestroy {
  articleSubscription!: Subscription;
  isMobile: boolean = false;
  allArticles: Article[] = [];
  recentArticles: Article[] = [];
  constructor(
    private articleService: ArticleService,
    public sanitizer: DomSanitizer,
    public imageService: ImageService
  ) {
    this.articleSubscription = this.articleService.getAllArticle().subscribe({
      next: (value: any) => {
        // console.log(value);
        if (value.publication)
          value.publication.forEach((element: any) => {
            console.log(element);
            this.allArticles.push(
              new Article(
                element.titre,
                element.type,
                element.description,
                element.portee,
                element.medias,
                element.date_publication
              )
            );
            return element;
          });
      },
    });
    this.articleService.getRecentArticles().subscribe({
      next: (value: any) => {
        // console.log(value);
        if (value.publication)
          value.publication.forEach((element: any) => {
            this.recentArticles.push(
              new Article(
                element.titre,
                element.type,
                element.description,
                element.portee,
                element.medias,
                element.date_publication
              )
            );
            return element;
          });
      },
    });
  }
  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.setMobileStatus(); // Set initial status on component initialization
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setMobileStatus();
  }
  private setMobileStatus(): void {
    this.isMobile = window.innerWidth < 768; // Adjust the threshold as needed
  }
  isMobileScreen(): boolean {
    return this.isMobile;
  }
}
