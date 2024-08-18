import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSliderModule } from '@angular/material/slider';
import { MatrixService } from '../service/matrix.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-matrix-footer',
  standalone: true,
  imports: [
    MatSliderModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  templateUrl: './matrix-footer.component.html',
  styleUrl: './matrix-footer.component.scss',
})
export class MatrixFooterComponent {
  constructor(public matrixService: MatrixService) {}
}
