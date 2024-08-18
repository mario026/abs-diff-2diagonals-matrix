import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixFooterComponent } from './matrix-footer.component';

describe('MatrixFooterComponent', () => {
  let component: MatrixFooterComponent;
  let fixture: ComponentFixture<MatrixFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatrixFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatrixFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
