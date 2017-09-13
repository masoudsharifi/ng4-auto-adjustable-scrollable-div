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
  @Input('offSet') _OffSet: number = 200;
  @Input('topPadding') _TopPadding: number = 0;
  @Input('bottomPadding') _BottomPadding: number = 0;
  @Input('leftPadding') _LeftPadding: number = 0;
  @Input('rightPadding') _RightPadding: number = 0;
  @Input('defaultHeight') _DefaultHeight: number = window.innerHeight;

  @HostBinding('style.height') height: string;
  @HostBinding('style.maxHeight') maxHeight: string;
  @HostBinding('style.overflowY') overflowY: string = 'scroll';
  @HostBinding('style.padding-top') paddingTop: string = this._TopPadding + 'px';
  @HostBinding('style.padding-left') paddingLeft: string = this._LeftPadding + 'px';
  @HostBinding('style.padding-right') paddingRight: string = this._RightPadding + 'px';
  @HostBinding('style.padding-bottom') paddingBottom: string = this._BottomPadding + 'px';

  @HostListener('window:resize', ['$event']) onResize(event){
    this.maxHeight = (event.target.innerHeight - this._OffSet - (this._TopPadding + this._BottomPadding)) + 'px';
    this.height = this.maxHeight;
  }
  
  constructor(
    private _elmRef: ElementRef) { }

  ngOnInit() {
    this.maxHeight = (this._DefaultHeight - this._OffSet- (this._TopPadding + this._BottomPadding)) + 'px';
    this.height = this.maxHeight;
    this.paddingLeft = this._LeftPadding + 'px';
    this.paddingRight = this._RightPadding + 'px';
    this.paddingTop = this._TopPadding + 'px';
    this.paddingBottom = this._BottomPadding + 'px';
  }
}
