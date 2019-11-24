import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubViewerAppComponent } from './github-viewer-app/github-viewer-app.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GithubViewerAppComponent],
  imports: [CommonModule, SharedModule],
  exports: [GithubViewerAppComponent],
})
export class GithubViewerModule {}
