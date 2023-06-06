import { ElementRef } from '@angular/core';
import {Boundary} from '../shared/boundary/boundary';

export interface NgxDrag extends Boundary {
  nativeEvent?: Event;
  elementRef?: ElementRef;
}
