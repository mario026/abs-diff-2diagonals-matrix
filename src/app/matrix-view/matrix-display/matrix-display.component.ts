import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatrixService } from '../service/matrix.service';
import { uniqueId } from 'lodash';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-matrix-display',
  standalone: true,
  imports: [MatGridListModule, MatFormFieldModule, MatInputModule],
  templateUrl: './matrix-display.component.html',
  styleUrl: './matrix-display.component.scss',
})
export class MatrixDisplayComponent {
  lodashUnique = uniqueId;
  constructor(public matrixService: MatrixService) {}
}
