import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app/app.component';
import { MaterialDemoModule } from './features/material-demo/material-demo.module';
import { GithubViewerModule } from '../app/features/github-viewer/github-viewer.module';
import { MatTableStyleModule } from './features/mat-table-style/mat-table-style.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialDemoModule,
    GithubViewerModule,
    MatTableStyleModule
  ],
  declarations: [AppComponent],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
