import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppMaterialModule } from './app.material.module';
import { AppComponent } from './app/app.component';
import { GithubViewerComponent } from './features/github-viewer/github-viewer.component';
import { MaterialExampleComponent } from './material-example/material-example.component';
import { DialogContentComponent } from './material-example/dialog-content/dialog-content.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    GithubViewerComponent,
    MaterialExampleComponent,
    DialogContentComponent,
  ],
  entryComponents: [DialogContentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
