import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-article',
  templateUrl: './mini-article.component.html',
  styleUrls: ['./mini-article.component.css'],
})
export class MiniArticleComponent implements OnInit {
  ngOnInit(): void {}
  showMoreText = false;
  cardBodyText: string = `This is a wider card with supporting text below as a natural lead-in
  to additional content. This content is a little bit longer. Lorem
  Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
  consectetur, adipisci velit..." "There is no one who loves pain
  itself, who seeks after it and wants to have it, simply because it is
  pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
  dictum ipsum ex, at condimentum erat consectetur id. Vivamus
  scelerisque maximus tortor, porta efficitur tellus lacinia ac.
 
    Quisque ac nibh ut ante pulvinar porttitor non eget diam. Cras dui
    sapien, ultricies in ipsum cursus, sagittis mattis est. Maecenas
    maximus a urna quis luctus. Mauris non tincidunt augue, vulputate
    venenatis ante. Maecenas ultricies commodo eleifend. In quis arcu
    pulvinar, semper magna eu, tincidunt nisi. Nunc vulputate elementum
    blandit. Aenean bibendum metus vitae tellus molestie dictum. Mauris
    felis massa, tincidunt et cursus et, pulvinar in erat. Maecenas vel
    lectus condimentum, imperdiet elit non, ullamcorper elit.
    Suspendisse sed iaculis lacus, sit amet sagittis ante. Morbi porta
    malesuada orci mollis porttitor. Ut vel ex maximus, pulvinar mi et,
    scelerisque odio. Vestibulum ut erat quis nulla consectetur
    eleifend. Aliquam dapibus tellus ut iaculis consequat. Praesent at
    dictum dolor. In venenatis at nunc nec gravida. Mauris non diam
    malesuada, ultrices arcu ut,';`;
  cardBodyTextShort!: string;
  cardBodyTextMore!: string;

  toggleText() {
    this.showMoreText = !this.showMoreText;
  }
}
