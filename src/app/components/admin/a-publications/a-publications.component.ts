import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-a-publications',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './a-publications.component.html',
  styleUrl: './a-publications.component.css',
})
export class APublicationsComponent {}
