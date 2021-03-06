(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prostate-prostate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/prostate/prostate.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/prostate/prostate.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Prostata</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/prostate/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/prostate/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/prostate/inflammation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/prostate/enlargement']\" [routerLinkActive]=\"['active']\">Beningno povećanje</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./src/app/pages/prostate/prostate.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/prostate/prostate.component.ts ***!
  \******************************************************/
/*! exports provided: Prostate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prostate", function() { return Prostate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seo.service */ "./src/app/seo.service.ts");





let Prostate = class Prostate {
    constructor(api, router, activatedRoute, seoService) {
        this.api = api;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.seoService = seoService;
        this.html = null;
        this.faqCategory = null;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.getPage(event.url);
                this.faqCategory = event.url;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var meta = activatedRoute.children[0].data.value;
                seoService.updateTitle(meta.title);
                seoService.updateDescription(meta.description);
            }
        });
    }
    ngOnInit() {
        this.getPage(this.router.url);
        this.faqCategory = this.router.url;
    }
    getPage(url) {
        this.api.getPage(url).subscribe((response) => {
            this.html = response;
        });
    }
};
Prostate.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }
];
Prostate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'prostate',
        template: __webpack_require__(/*! raw-loader!./prostate.html */ "./node_modules/raw-loader/index.js!./src/app/pages/prostate/prostate.html"),
        styles: [__webpack_require__(/*! ./prostate.scss */ "./src/app/pages/prostate/prostate.scss")]
    })
], Prostate);



/***/ }),

/***/ "./src/app/pages/prostate/prostate.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/prostate/prostate.module.ts ***!
  \***************************************************/
/*! exports provided: ProstateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProstateModule", function() { return ProstateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _prostate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prostate.component */ "./src/app/pages/prostate/prostate.component.ts");
/* harmony import */ var _prostate_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prostate.routing */ "./src/app/pages/prostate/prostate.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







let ProstateModule = class ProstateModule {
};
ProstateModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"],
        ],
        declarations: [
            _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _prostate_routing__WEBPACK_IMPORTED_MODULE_4__["ProstateRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]
    })
], ProstateModule);



/***/ }),

/***/ "./src/app/pages/prostate/prostate.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/prostate/prostate.routing.ts ***!
  \****************************************************/
/*! exports provided: ProstateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProstateRoutingModule", function() { return ProstateRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");
/* harmony import */ var _prostate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prostate.component */ "./src/app/pages/prostate/prostate.component.ts");





const routes = [
    {
        path: '',
        component: _prostate_component__WEBPACK_IMPORTED_MODULE_4__["Prostate"],
        children: [
            { path: 'general', component: _prostate_component__WEBPACK_IMPORTED_MODULE_4__["Prostate"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].prostate.general },
            { path: 'cancer', component: _prostate_component__WEBPACK_IMPORTED_MODULE_4__["Prostate"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].prostate.cancer },
            { path: 'inflammation', component: _prostate_component__WEBPACK_IMPORTED_MODULE_4__["Prostate"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].prostate.inflammation },
            { path: 'enlargement', component: _prostate_component__WEBPACK_IMPORTED_MODULE_4__["Prostate"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].prostate.enlargement },
        ],
    },
];
let ProstateRoutingModule = class ProstateRoutingModule {
};
ProstateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProstateRoutingModule);



/***/ }),

/***/ "./src/app/pages/prostate/prostate.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/prostate/prostate.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb3N0YXRlL3Byb3N0YXRlLnNjc3MifQ== */"

/***/ })

}]);
//# sourceMappingURL=pages-prostate-prostate-module-es2015.js.map