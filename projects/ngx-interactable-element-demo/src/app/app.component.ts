import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgxResizeHandleType } from 'ngx-interactable-element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  title = 'ngx-interactable-element-demo';

  readonly handleType = NgxResizeHandleType;

  mousePosition: any
  zoomdPosition: any

  zoomOffsetWidth: any
  zoomareaRect: any

  dragOffsetWidth: any
  dragareaRect: any

  @ViewChild('zoomarea') zoomarea: ElementRef | undefined;
  @ViewChild("dragarea") dragarea: ElementRef | undefined;
  
  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.dragOffsetWidth = this.dragarea?.nativeElement.offsetWidth
    this.zoomOffsetWidth = this.zoomarea?.nativeElement.offsetWidth
    this.zoomareaRect = this.zoomarea?.nativeElement.getBoundingClientRect();
    this.dragareaRect = this.dragarea?.nativeElement.getBoundingClientRect();
  }

  dragged(event: any) {
    // console.log(event)
  }

  mousemove(event: MouseEvent) {
    this.mousePosition = {
      clientX: event.clientX,
      clientY: event.clientY,
      screenX: event.screenX,
      screenY: event.screenY,
    }
  }

  zoomdmove(event: MouseEvent) {
    this.zoomdPosition = {
      clientX: event.clientX,
      clientY: event.clientY,
      screenX: event.screenX,
      screenY: event.screenY,
    }
  }
}
