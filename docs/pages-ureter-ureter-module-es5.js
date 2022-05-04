(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ureter-ureter-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ureter/ureter.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ureter/ureter.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Mokraćna cijev</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/ureter/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/ureter/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/ureter/inflammation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/ureter/constriction']\" [routerLinkActive]=\"['active']\">Suženje</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./src/app/pages/ureter/ureter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/ureter/ureter.component.ts ***!
  \**************************************************/
/*! exports provided: Ureter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ureter", function() { return Ureter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Ureter = /** @class */ (function () {
    function Ureter(api, router) {
        var _this = this;
        this.api = api;
        this.router = router;
        this.html = null;
        this.faqCategory = null;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.getPage(event.url);
                _this.faqCategory = event.url;
            }
        });
    }
    Ureter.prototype.ngOnInit = function () {
        this.getPage(this.router.url);
        this.faqCategory = this.router.url;
    };
    Ureter.prototype.getPage = function (url) {
        var _this = this;
        this.api.getPage(url).subscribe(function (response) {
            _this.html = response;
        });
    };
    Ureter.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Ureter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ureter',
            template: __webpack_require__(/*! raw-loader!./ureter.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ureter/ureter.html"),
            styles: [__webpack_require__(/*! ./ureter.scss */ "./src/app/pages/ureter/ureter.scss")]
        })
    ], Ureter);
    return Ureter;
}());



/***/ }),

/***/ "./src/app/pages/ureter/ureter.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ureter/ureter.module.ts ***!
  \***********************************************/
/*! exports provided: UreterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UreterModule", function() { return UreterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ureter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ureter.component */ "./src/app/pages/ureter/ureter.component.ts");
/* harmony import */ var _ureter_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ureter.routing */ "./src/app/pages/ureter/ureter.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







var UreterModule = /** @class */ (function () {
    function UreterModule() {
    }
    UreterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _ureter_component__WEBPACK_IMPORTED_MODULE_3__["Ureter"],
            ],
            declarations: [
                _ureter_component__WEBPACK_IMPORTED_MODULE_3__["Ureter"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _ureter_routing__WEBPACK_IMPORTED_MODULE_4__["UreterRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], UreterModule);
    return UreterModule;
}());



/***/ }),

/***/ "./src/app/pages/ureter/ureter.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/ureter/ureter.routing.ts ***!
  \************************************************/
/*! exports provided: UreterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UreterRoutingModule", function() { return UreterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");
/* harmony import */ var _ureter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ureter.component */ "./src/app/pages/ureter/ureter.component.ts");





var routes = [
    {
        path: '',
        component: _ureter_component__WEBPACK_IMPORTED_MODULE_4__["Ureter"],
        children: [
            { path: 'general', component: _ureter_component__WEBPACK_IMPORTED_MODULE_4__["Ureter"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].ureter.general },
            { path: 'cancer', component: _ureter_component__WEBPACK_IMPORTED_MODULE_4__["Ureter"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].ureter.cancer },
            { path: 'inflammation', component: _ureter_component__WEBPACK_IMPORTED_MODULE_4__["Ureter"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].ureter.inflammation },
            { path: 'constriction', component: _ureter_component__WEBPACK_IMPORTED_MODULE_4__["Ureter"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].ureter.constriction },
        ],
    },
];
var UreterRoutingModule = /** @class */ (function () {
    function UreterRoutingModule() {
    }
    UreterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UreterRoutingModule);
    return UreterRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/ureter/ureter.scss":
/*!******************************************!*\
  !*** ./src/app/pages/ureter/ureter.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VyZXRlci91cmV0ZXIuc2NzcyJ9 */"

/***/ })

}]);
//# sourceMappingURL=pages-ureter-ureter-module-es5.js.map