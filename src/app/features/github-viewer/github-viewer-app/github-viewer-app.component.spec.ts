import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubViewerAppComponent } from './github-viewer-app.component';

describe('GithubViewerAppComponent', () => {
  let component: GithubViewerAppComponent;
  let fixture: ComponentFixture<GithubViewerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubViewerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubViewerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
