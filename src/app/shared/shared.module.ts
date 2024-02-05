import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbAlertModule
  ],
  declarations: [ExampleAComponent],
  exports:  [ExampleAComponent],
})
export class SharedModule { }
