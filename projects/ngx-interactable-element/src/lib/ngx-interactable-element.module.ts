import { NgModule } from '@angular/core';
import { NgxDragHandleDirective } from './drag/drag-handle.directive';
import { NgxDragDirective } from './drag/drag.directive';
import { NgxResizeHandleDirective } from './resize/resize-handle.directive';
import { NgxResizeDirective } from './resize/resize.directive';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NgxDragDirective,
    NgxDragHandleDirective,
    NgxResizeDirective,
    NgxResizeHandleDirective
  ],
  exports: [
    NgxDragDirective, 
    NgxDragHandleDirective, 
    NgxResizeDirective, 
    NgxResizeHandleDirective
  ]
})
export class NgxInteractableElementModule { }
