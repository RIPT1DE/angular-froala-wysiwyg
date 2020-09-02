import { NgModule } from '@angular/core';
import { FroalaViewDirective } from './view.directive';
import * as i0 from "@angular/core";
export class FroalaViewModule {
    static forRoot() {
        return { ngModule: FroalaViewModule, providers: [] };
    }
}
FroalaViewModule.ɵmod = i0.ɵɵdefineNgModule({ type: FroalaViewModule });
FroalaViewModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FroalaViewModule_Factory(t) { return new (t || FroalaViewModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FroalaViewModule, { declarations: [FroalaViewDirective], exports: [FroalaViewDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FroalaViewModule, [{
        type: NgModule,
        args: [{
                declarations: [FroalaViewDirective],
                exports: [FroalaViewDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=view.module.js.map