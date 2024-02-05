import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleAComponent } from './example-a/example-a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ExampleAComponent],
  exports:  [ExampleAComponent],
})
export class SharedModule { }
