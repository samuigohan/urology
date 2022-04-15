(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-testis-testis-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/testis/testis.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/testis/testis.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Testis</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/testis/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/testis/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/testis/inflammation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/testis/hydrocele']\" [routerLinkActive]=\"['active']\">Hidrokela i spermatokela</a>\r\n        <a [routerLink]=\"['/testis/varicocele']\" [routerLinkActive]=\"['active']\">Varikokela</a>\r\n        <a [routerLink]=\"['/testis/torsion']\" [routerLinkActive]=\"['active']\">Torzija testisa</a>\r\n        <a [routerLink]=\"['/testis/infertility']\" [routerLinkActive]=\"['active']\">Neplodnost</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./src/app/pages/testis/testis.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/testis/testis.component.ts ***!
  \**************************************************/
/*! exports provided: Testis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testis", function() { return Testis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Testis = /** @class */ (function () {
    function Testis(api, router) {
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
    Testis.prototype.ngOnInit = function () {
        this.getPage(this.router.url);
    };
    Testis.prototype.getPage = function (url) {
        var _this = this;
        this.api.getPage(url).subscribe(function (response) {
            _this.html = response;
        });
    };
    Testis.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Testis = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'testis',
            template: __webpack_require__(/*! raw-loader!./testis.html */ "./node_modules/raw-loader/index.js!./src/app/pages/testis/testis.html"),
            styles: [__webpack_require__(/*! ./testis.scss */ "./src/app/pages/testis/testis.scss")]
        })
    ], Testis);
    return Testis;
}());



/***/ }),

/***/ "./src/app/pages/testis/testis.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/testis/testis.module.ts ***!
  \***********************************************/
/*! exports provided: TestisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestisModule", function() { return TestisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _testis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testis.component */ "./src/app/pages/testis/testis.component.ts");
/* harmony import */ var _testis_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testis.routing */ "./src/app/pages/testis/testis.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







var TestisModule = /** @class */ (function () {
    function TestisModule() {
    }
    TestisModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"],
            ],
            declarations: [
                _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _testis_routing__WEBPACK_IMPORTED_MODULE_4__["TestisRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], TestisModule);
    return TestisModule;
}());



/***/ }),

/***/ "./src/app/pages/testis/testis.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/testis/testis.routing.ts ***!
  \************************************************/
/*! exports provided: TestisRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestisRoutingModule", function() { return TestisRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _testis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testis.component */ "./src/app/pages/testis/testis.component.ts");




var routes = [
    {
        path: '',
        component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"],
        children: [
            { path: 'general', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
            { path: 'cancer', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
            { path: 'inflammation', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
            { path: 'hydrocele', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
            { path: 'varicocele', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
            { path: 'torsion', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
            { path: 'infertility', component: _testis_component__WEBPACK_IMPORTED_MODULE_3__["Testis"] },
        ],
    },
];
var TestisRoutingModule = /** @class */ (function () {
    function TestisRoutingModule() {
    }
    TestisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TestisRoutingModule);
    return TestisRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/testis/testis.scss":
/*!******************************************!*\
  !*** ./src/app/pages/testis/testis.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlc3Rpcy90ZXN0aXMuc2NzcyJ9 */"

/***/ })

}]);
//# sourceMappingURL=pages-testis-testis-module-es5.js.map