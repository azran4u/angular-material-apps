import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDemoAppComponent } from './material-demo-app.component';

describe('MaterialDemoAppComponent', () => {
  let component: MaterialDemoAppComponent;
  let fixture: ComponentFixture<MaterialDemoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDemoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDemoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
