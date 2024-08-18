import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-matrix-header',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './matrix-header.component.html',
  styleUrl: './matrix-header.component.scss',
})
export class MatrixHeaderComponent {}
