import { NgIf, SlicePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterOutlet } from '@angular/router';
import { CustomDatePipe } from 'src/app/core/_pipes/custom-date/custom-date.pipe';
import { PublicationService } from 'src/app/core/_services/publication/publication.service';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-a-publications',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './a-publications.component.html',
  styleUrl: './a-publications.component.css',
})
export class APublicationsComponent {}
