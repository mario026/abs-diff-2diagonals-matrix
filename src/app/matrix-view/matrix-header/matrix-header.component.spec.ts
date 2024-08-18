import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixHeaderComponent } from './matrix-header.component';

describe('MatrixHeaderComponent', () => {
  let component: MatrixHeaderComponent;
  let fixture: ComponentFixture<MatrixHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
