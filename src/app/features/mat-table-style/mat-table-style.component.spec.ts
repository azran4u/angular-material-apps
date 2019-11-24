import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableStyleComponent } from './mat-table-style.component';

describe('MatTableStyleComponent', () => {
  let component: MatTableStyleComponent;
  let fixture: ComponentFixture<MatTableStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
