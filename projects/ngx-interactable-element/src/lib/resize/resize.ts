import { ElementRef } from '@angular/core';
import { Boundary } from '../shared/boundary/boundary';

export interface NgxResize extends Boundary {
  nativeEvent?: Event;
  elementRef?: ElementRef;
}
