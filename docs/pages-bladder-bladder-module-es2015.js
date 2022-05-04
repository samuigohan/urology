(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bladder-bladder-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bladder/bladder.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bladder/bladder.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Mokraćni mjehur</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/bladder/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/bladder/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/bladder/inflammation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/bladder/stones']\" [routerLinkActive]=\"['active']\">Kamenci</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./src/app/pages/bladder/bladder.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/bladder/bladder.component.ts ***!
  \****************************************************/
/*! exports provided: Bladder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bladder", function() { return Bladder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let Bladder = class Bladder {
    constructor(api, router) {
        this.api = api;
        this.router = router;
        this.html = null;
        this.faqCategory = null;
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.getPage(event.url);
                this.faqCategory = event.url;
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
Bladder.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Bladder = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'bladder',
        template: __webpack_require__(/*! raw-loader!./bladder.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bladder/bladder.html"),
        styles: [__webpack_require__(/*! ./bladder.scss */ "./src/app/pages/bladder/bladder.scss")]
    })
], Bladder);



/***/ }),

/***/ "./src/app/pages/bladder/bladder.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/bladder/bladder.module.ts ***!
  \*************************************************/
/*! exports provided: BladderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BladderModule", function() { return BladderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _bladder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bladder.component */ "./src/app/pages/bladder/bladder.component.ts");
/* harmony import */ var _bladder_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bladder.routing */ "./src/app/pages/bladder/bladder.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







let BladderModule = class BladderModule {
};
BladderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"],
        ],
        declarations: [
            _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _bladder_routing__WEBPACK_IMPORTED_MODULE_4__["BladderRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        ]
    })
], BladderModule);



/***/ }),

/***/ "./src/app/pages/bladder/bladder.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/bladder/bladder.routing.ts ***!
  \**************************************************/
/*! exports provided: BladderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BladderRoutingModule", function() { return BladderRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _bladder_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bladder.component */ "./src/app/pages/bladder/bladder.component.ts");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");





const routes = [
    {
        path: '',
        component: _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"],
        children: [
            { path: 'general', component: _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].bladder.general },
            { path: 'cancer', component: _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].bladder.cancer },
            { path: 'inflammation', component: _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].bladder.inflammation },
            { path: 'stones', component: _bladder_component__WEBPACK_IMPORTED_MODULE_3__["Bladder"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].bladder.stones },
        ],
    },
];
let BladderRoutingModule = class BladderRoutingModule {
};
BladderRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BladderRoutingModule);



/***/ }),

/***/ "./src/app/pages/bladder/bladder.scss":
/*!********************************************!*\
  !*** ./src/app/pages/bladder/bladder.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JsYWRkZXIvYmxhZGRlci5zY3NzIn0= */"

/***/ })

}]);
//# sourceMappingURL=pages-bladder-bladder-module-es2015.js.map