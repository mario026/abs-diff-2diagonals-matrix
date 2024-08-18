import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatrixDisplayComponent } from './matrix-display/matrix-display.component';
import { MatrixService } from './service/matrix.service';
import { MatrixFooterComponent } from './matrix-footer/matrix-footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatrixHeaderComponent } from './matrix-header/matrix-header.component';

@Component({
  selector: 'app-matrix-view',
  standalone: true,
  imports: [
    MatCardModule,
    MatDividerModule,
    MatrixDisplayComponent,
    MatrixFooterComponent,
    MatrixHeaderComponent,
    MatrixHeaderComponent,
  ],
  templateUrl: './matrix-view.component.html',
  styleUrl: './matrix-view.component.scss',
  providers: [MatrixService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixViewComponent {
  constructor(public matrixService: MatrixService) {}
}
