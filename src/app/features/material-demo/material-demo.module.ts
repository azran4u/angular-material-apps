import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialDemoAppComponent } from './material-demo-app/material-demo-app.component';

@NgModule({
  declarations: [DialogContentComponent, MaterialDemoAppComponent],
  imports: [CommonModule, SharedModule],
  exports: [MaterialDemoAppComponent],
})
export class MaterialDemoModule {}
