(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-penis-penis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/penis/penis.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/penis/penis.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Penis</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/penis/general']\" [routerLinkActive]=\"['active']\">Anatomija i funkcija</a>\r\n        <a [routerLink]=\"['/penis/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/penis/phimosis']\" [routerLinkActive]=\"['active']\">Fimoza</a>\r\n        <a [routerLink]=\"['/penis/frenulum']\" [routerLinkActive]=\"['active']\">Frenulum breve</a>\r\n        <a [routerLink]=\"['/penis/induratio']\" [routerLinkActive]=\"['active']\">Induratio penis plastica</a>\r\n        <a [routerLink]=\"['/penis/disfunction']\" [routerLinkActive]=\"['active']\">Spolna nemoć</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./src/app/pages/penis/penis.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/penis/penis.component.ts ***!
  \************************************************/
/*! exports provided: Penis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Penis", function() { return Penis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seo.service */ "./src/app/seo.service.ts");





var Penis = /** @class */ (function () {
    function Penis(api, router, activatedRoute, seoService) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.seoService = seoService;
        this.html = null;
        this.faqCategory = null;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.getPage(event.url);
                _this.faqCategory = event.url;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var meta = activatedRoute.children[0].data.value;
                seoService.updateTitle(meta.title);
                seoService.updateDescription(meta.description);
            }
        });
    }
    Penis.prototype.ngOnInit = function () {
        this.getPage(this.router.url);
        this.faqCategory = this.router.url;
    };
    Penis.prototype.getPage = function (url) {
        var _this = this;
        this.api.getPage(url).subscribe(function (response) {
            _this.html = response;
        });
    };
    Penis.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }
    ]; };
    Penis = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'penis',
            template: __webpack_require__(/*! raw-loader!./penis.html */ "./node_modules/raw-loader/index.js!./src/app/pages/penis/penis.html"),
            styles: [__webpack_require__(/*! ./penis.scss */ "./src/app/pages/penis/penis.scss")]
        })
    ], Penis);
    return Penis;
}());



/***/ }),

/***/ "./src/app/pages/penis/penis.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/penis/penis.module.ts ***!
  \*********************************************/
/*! exports provided: PenisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenisModule", function() { return PenisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _penis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./penis.component */ "./src/app/pages/penis/penis.component.ts");
/* harmony import */ var _penis_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./penis.routing */ "./src/app/pages/penis/penis.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







var PenisModule = /** @class */ (function () {
    function PenisModule() {
    }
    PenisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _penis_component__WEBPACK_IMPORTED_MODULE_3__["Penis"],
            ],
            declarations: [
                _penis_component__WEBPACK_IMPORTED_MODULE_3__["Penis"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _penis_routing__WEBPACK_IMPORTED_MODULE_4__["PenisRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], PenisModule);
    return PenisModule;
}());



/***/ }),

/***/ "./src/app/pages/penis/penis.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/penis/penis.routing.ts ***!
  \**********************************************/
/*! exports provided: PenisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenisRoutingModule", function() { return PenisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");
/* harmony import */ var _penis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./penis.component */ "./src/app/pages/penis/penis.component.ts");





var routes = [
    {
        path: '',
        component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"],
        children: [
            { path: 'general', component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].penis.general },
            { path: 'cancer', component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].penis.cancer },
            { path: 'phimosis', component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].penis.phimosis },
            { path: 'frenulum', component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].penis.frenulum },
            { path: 'induratio', component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].penis.induratio },
            { path: 'disfunction', component: _penis_component__WEBPACK_IMPORTED_MODULE_4__["Penis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].penis.disfunction },
        ],
    },
];
var PenisRoutingModule = /** @class */ (function () {
    function PenisRoutingModule() {
    }
    PenisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PenisRoutingModule);
    return PenisRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/penis/penis.scss":
/*!****************************************!*\
  !*** ./src/app/pages/penis/penis.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmlzL3BlbmlzLnNjc3MifQ== */"

/***/ })

}]);
//# sourceMappingURL=pages-penis-penis-module-es5.js.map