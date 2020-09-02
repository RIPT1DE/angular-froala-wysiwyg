import { NgModule } from '@angular/core';
import { FroalaEditorDirective } from './editor.directive';
import * as i0 from "@angular/core";
export class FroalaEditorModule {
    static forRoot() {
        return { ngModule: FroalaEditorModule, providers: [] };
    }
}
FroalaEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: FroalaEditorModule });
FroalaEditorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function FroalaEditorModule_Factory(t) { return new (t || FroalaEditorModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FroalaEditorModule, { declarations: [FroalaEditorDirective], exports: [FroalaEditorDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(FroalaEditorModule, [{
        type: NgModule,
        args: [{
                declarations: [FroalaEditorDirective],
                exports: [FroalaEditorDirective]
            }]
    }], null, null); })();
//# sourceMappingURL=editor.module.js.map