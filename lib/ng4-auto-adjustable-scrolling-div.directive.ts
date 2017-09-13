import { 
  Directive, 
  Renderer, 
  OnInit, 
  ElementRef, 
  HostListener, 
  HostBinding, 
  Input 
} from '@angular/core';

@Directive({
  selector: '[ng4AutoAdjustableScrollingDiv]'
})
export class Ng4AutoAdjustableScrollingDivDirective implements OnInit {
  @Input('defaultHeight') _DefaultHeight: number = window.innerHeight;
  @Input('offSet') _OffSet: number = 200;
  @HostBinding('style.maxHeight') maxHeight: string;
  @HostBinding('style.height') height: string;
  @HostBinding('style.overflowY') overflowY: string = 'scroll';
  @HostBinding('style.padding') padding: string = '0';

  @HostListener('window:resize', ['$event']) onResize(event){
    this.maxHeight = (event.target.innerHeight - this._OffSet) + 'px';
    this.height = (event.target.innerHeight - this._OffSet) + 'px';
  }
  
  constructor(
    private _renderer: Renderer,
    private _elmRef: ElementRef) { }

  ngOnInit() {
    this.maxHeight = (this._DefaultHeight - this._OffSet) + 'px';
    this.height = this.maxHeight;
  }
}
