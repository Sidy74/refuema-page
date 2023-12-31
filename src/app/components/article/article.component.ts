import { Component, HostListener, OnInit } from '@angular/core';
import { Article } from 'src/app/core/_models/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  isMobile: boolean = false;
  allArticles!: Array<Article>;

  ngOnInit(): void {
    this.allArticles = new Array<Article>(
      new Article(
        'Les Femmes ',
        `Les femmes jouent un rôle fondamental dans tous les aspects de la vie. Leur force, leur persévérance et leur intelligence façonnent le monde qui nous entoure. Que ce soit dans le domaine professionnel, artistique ou social, les femmes continuent de repousser les limites et de briser les stéréotypes. Leur contribution à la société est inestimable, et leur voix est cruciale pour promouvoir l'égalité et le progrès. En tant que leaders, innovatrices et mentors, les femmes inspirent les générations futures à réaliser leur plein potentiel. Il est essentiel de reconnaître et de célébrer la diversité des réalisations des femmes à travers l'histoire et de continuer à œuvrer pour un monde plus inclusif et équitable. `,
        1,
        1,
        [
          'https://m.media-amazon.com/images/I/51K8asa-o6L._AC_UF1000,1000_QL80_.jpg',
        ]
      ),
      new Article(
        'Le Mali',
        `Le Mali, situé au cœur de l'Afrique de l'Ouest, est un pays riche en histoire et en culture. Avec sa diversité ethnique, le Mali abrite des communautés telles que les Bambara, les Touaregs et les Peuls, contribuant à une mosaïque culturelle unique. La capitale, Bamako, est un centre dynamique d'activité artistique et musicale. Le pays est également connu pour son patrimoine historique, notamment la ville ancienne de Tombouctou, classée au patrimoine mondial de l'UNESCO. Malgré des défis économiques, le Mali continue de progresser, et son peuple travaille avec détermination pour un avenir plus stable et prospère.`,
        1,
        1,
        ['https://jean-jaures.org/wp-content/uploads/2021/07/Mali-945x630.jpg']
      ),
      new Article(
        'Informatique',
        `L'informatique, pilier de notre ère numérique, englobe un vaste domaine d'activités. De la conception de logiciels à la gestion de réseaux, l'informatique façonne notre quotidien. Les programmeurs, véritables architectes du monde numérique, écrivent des lignes de code pour créer des applications innovantes. Les experts en sécurité informatique protègent nos données contre les menaces en constante évolution. Le cloud computing révolutionne la manière dont nous stockons et partageons l'information. L'intelligence artificielle ouvre de nouvelles perspectives, permettant aux machines d'apprendre et de prendre des décisions autonomes. Dans un monde de plus en plus connecté, l'informatique demeure un moteur essentiel de progrès et d'innovation.`,
        1,
        1,
        [
          'https://img.freepik.com/photos-gratuite/puce-informatique-connecte-composants-electriques-alimentant-industrie-mondiale-communications-generee-par-intelligence-artificielle_24877-80915.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703894400&semt=sph',
        ]
      ),
      new Article(
        `Le Processeur`,
        `Le processeur, souvent désigné comme le cerveau d'un système informatique, joue un rôle central dans l'exécution de tâches complexes à une vitesse remarquable. Mesurée en gigahertz (GHz), la fréquence d'un processeur définit sa rapidité d'exécution. Les architectures modernes, telles que x86 et ARM, alimentent divers dispositifs, des ordinateurs personnels aux dispositifs mobiles. Les processeurs multicœurs, une tendance actuelle, permettent une multitâche efficace, augmentant la productivité des utilisateurs.

      Des géants de l'industrie comme Intel et AMD rivalisent pour développer des processeurs innovants, intégrant des technologies comme le Hyper-Threading et les caches mémoire pour améliorer les performances. Les progrès constants dans la miniaturisation des transistors conduisent à des processeurs plus économes en énergie et plus performants. L'évolution rapide de la technologie des processeurs alimente la croissance exponentielle de la puissance de calcul, ouvrant la voie à des applications telles que l'intelligence artificielle, la réalité virtuelle et les simulations complexes. En fin de compte, le processeur reste un élément essentiel qui façonne la puissance et la polyvalence des systèmes informatiques modernes.`,
        1,
        1,
        [
          'https://img.freepik.com/photos-gratuite/puce-informatique-connecte-composants-electriques-alimentant-industrie-mondiale-communications-generee-par-intelligence-artificielle_24877-80915.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703894400&semt=sph',
        ]
      )
    );
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
