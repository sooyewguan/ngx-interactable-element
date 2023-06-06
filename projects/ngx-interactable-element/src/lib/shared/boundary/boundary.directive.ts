import { Directive } from '@angular/core';
import { Boundary } from './boundary';

/**
 * The directive is used to work with boundary area for HTML element
 *
 * @author Dmytro Parfenov <dmitryparfenov937@gmail.com>
 *
 * @internal
 *
 * @dynamic
 * @see https://angular.io/guide/angular-compiler-options#strictmetadataemit
 */
@Directive({
  selector: '[ngxBoundary]',
})
export class BoundaryDirective {
  /**
   * CSS selector or HTML element
   */
  protected boundary: string | HTMLElement | Window | null = null;

  protected scale: number = 1;

  constructor(private readonly windowObject?: Window, private readonly documentObject?: Document) { }

  /**
   * Get boundary position based on {@link boundary}
   */
  protected getBoundary(): Boundary | null {
    const rect = {} as Boundary;

    const boundaryElement = this.resolveBoundaryElement();

    if (boundaryElement instanceof HTMLElement) {
      const boundaryElementRect = boundaryElement.getBoundingClientRect();

      // console.log("[BoundaryDirective] getBoundary offset", boundaryElement.offsetTop, boundaryElement.offsetLeft, boundaryElement.offsetWidth, boundaryElement.offsetHeight)
      // console.log("[BoundaryDirective] getBoundary rect", boundaryElement.clientWidth, boundaryElementRect.width)

      rect.left = boundaryElementRect.left;
      rect.top = boundaryElementRect.top;
      rect.bottom = boundaryElementRect.bottom;
      rect.right = boundaryElementRect.right;
      
      this.scale = boundaryElementRect.width / boundaryElement.clientWidth

      // rect.left = boundaryElement.offsetLeft; // boundaryElementRect.left;
      // rect.top = boundaryElement.offsetTop; //boundaryElementRect.top;
      // rect.bottom =  boundaryElement.offsetTop + boundaryElement.offsetHeight; // boundaryElementRect.bottom;
      // rect.right = boundaryElement.offsetLeft + boundaryElement.offsetWidth; //  boundaryElementRect.right;

      return rect;
    }

    if (boundaryElement instanceof Window && this.windowObject) {
      rect.top = 0;
      rect.left = 0;
      rect.right = this.windowObject.innerWidth;
      rect.bottom = this.windowObject.innerHeight;

      return rect;
    }

    return null;
  }

  /**
   * Resolves HTML element based on {@link boundary}
   */
  protected resolveBoundaryElement(): Element | Window | null {
    if (!this.boundary) {
      return null;
    }

    if (this.boundary === 'window' && this.windowObject) {
      return this.windowObject;
    }

    if (typeof this.boundary === 'string') {
      return this.documentObject ? this.documentObject.querySelector(this.boundary) : null;
    }

    return this.boundary;
  }

  /**
   * Returns positional value based on boundary position
   */
  protected basedOnBoundary(value: number, position: 'left' | 'top'): number {
    const boundary = this.getBoundary();

    if (!boundary) {
      return value;
    }

    switch (position) {
      case 'left':
        return (value - boundary.left) / this.scale;
      case 'top':
        return (value - boundary.top) / this.scale;
    }

    return value / this.scale;
  }
}
