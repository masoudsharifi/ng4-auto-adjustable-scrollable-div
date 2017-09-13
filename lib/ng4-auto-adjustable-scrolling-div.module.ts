import { NgModule, } from '@angular/core';
import { HttpModule } from "@angular/http";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { Ng4AutoAdjustableScrollingDivDirective } from './ng4-auto-adjustable-scrolling-div.directive';

@NgModule({
    imports: [
        HttpModule,
        CommonModule,
        BrowserModule
    ],
    exports: [
        Ng4AutoAdjustableScrollingDivDirective
    ],
    declarations: [
        Ng4AutoAdjustableScrollingDivDirective
    ],
    providers: [],
})
export class Ng4AutoAdjustableScrollingDivModule { }
