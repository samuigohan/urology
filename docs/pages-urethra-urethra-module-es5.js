(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-urethra-urethra-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/urethra/urethra.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/urethra/urethra.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Mokraćovod</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/urethra/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/urethra/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/urethra/stones']\" [routerLinkActive]=\"['active']\">Kamenci</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./src/app/pages/urethra/urethra.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/urethra/urethra.component.ts ***!
  \****************************************************/
/*! exports provided: Urethra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Urethra", function() { return Urethra; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seo.service */ "./src/app/seo.service.ts");





var Urethra = /** @class */ (function () {
    function Urethra(api, router, activatedRoute, seoService) {
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
    Urethra.prototype.ngOnInit = function () {
        this.getPage(this.router.url);
        this.faqCategory = this.router.url;
    };
    Urethra.prototype.getPage = function (url) {
        var _this = this;
        this.api.getPage(url).subscribe(function (response) {
            _this.html = response;
        });
    };
    Urethra.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }
    ]; };
    Urethra = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'urethra',
            template: __webpack_require__(/*! raw-loader!./urethra.html */ "./node_modules/raw-loader/index.js!./src/app/pages/urethra/urethra.html"),
            styles: [__webpack_require__(/*! ./urethra.scss */ "./src/app/pages/urethra/urethra.scss")]
        })
    ], Urethra);
    return Urethra;
}());



/***/ }),

/***/ "./src/app/pages/urethra/urethra.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/urethra/urethra.module.ts ***!
  \*************************************************/
/*! exports provided: UrethraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrethraModule", function() { return UrethraModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _urethra_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./urethra.component */ "./src/app/pages/urethra/urethra.component.ts");
/* harmony import */ var _urethra_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urethra.routing */ "./src/app/pages/urethra/urethra.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







var UrethraModule = /** @class */ (function () {
    function UrethraModule() {
    }
    UrethraModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_urethra_component__WEBPACK_IMPORTED_MODULE_3__["Urethra"],],
            declarations: [
                _urethra_component__WEBPACK_IMPORTED_MODULE_3__["Urethra"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _urethra_routing__WEBPACK_IMPORTED_MODULE_4__["UrethraRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], UrethraModule);
    return UrethraModule;
}());



/***/ }),

/***/ "./src/app/pages/urethra/urethra.routing.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/urethra/urethra.routing.ts ***!
  \**************************************************/
/*! exports provided: UrethraRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrethraRoutingModule", function() { return UrethraRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");
/* harmony import */ var _urethra_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./urethra.component */ "./src/app/pages/urethra/urethra.component.ts");





var routes = [
    {
        path: '',
        component: _urethra_component__WEBPACK_IMPORTED_MODULE_4__["Urethra"],
        children: [
            { path: 'general', component: _urethra_component__WEBPACK_IMPORTED_MODULE_4__["Urethra"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].urethra.general },
            { path: 'cancer', component: _urethra_component__WEBPACK_IMPORTED_MODULE_4__["Urethra"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].urethra.cancer },
            { path: 'stones', component: _urethra_component__WEBPACK_IMPORTED_MODULE_4__["Urethra"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].urethra.stones },
        ],
    },
];
var UrethraRoutingModule = /** @class */ (function () {
    function UrethraRoutingModule() {
    }
    UrethraRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UrethraRoutingModule);
    return UrethraRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/urethra/urethra.scss":
/*!********************************************!*\
  !*** ./src/app/pages/urethra/urethra.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VyZXRocmEvdXJldGhyYS5zY3NzIn0= */"

/***/ })

}]);
//# sourceMappingURL=pages-urethra-urethra-module-es5.js.map