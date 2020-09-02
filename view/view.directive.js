import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class FroalaViewDirective {
    constructor(renderer, element) {
        this.renderer = renderer;
        this._element = element.nativeElement;
    }
    // update content model as it comes
    set froalaView(content) {
        this._element.innerHTML = content;
    }
    ngAfterViewInit() {
        this.renderer.addClass(this._element, "fr-view");
    }
}
FroalaViewDirective.ɵfac = function FroalaViewDirective_Factory(t) { return new (t || FroalaViewDirective)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
FroalaViewDirective.ɵdir = i0.ɵɵdefineDirective({ type: FroalaViewDirective, selectors: [["", "froalaView", ""]], inputs: { froalaView: "froalaView" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FroalaViewDirective, [{
        type: Directive,
        args: [{
                selector: '[froalaView]'
            }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { froalaView: [{
            type: Input
        }] }); })();
//# sourceMappingURL=view.directive.js.map