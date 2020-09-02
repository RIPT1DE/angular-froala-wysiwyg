import { ElementRef, Renderer2 } from '@angular/core';
import * as i0 from "@angular/core";
export declare class FroalaViewDirective {
    private renderer;
    private _element;
    constructor(renderer: Renderer2, element: ElementRef);
    set froalaView(content: string);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<FroalaViewDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<FroalaViewDirective, "[froalaView]", never, { "froalaView": "froalaView"; }, {}, never>;
}
