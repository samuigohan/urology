(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prostate-prostate-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/prostate/prostate.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/prostate/prostate.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Mokraćni mjehur</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/prostate/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/prostate/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/prostate/inflamation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/prostate/enalargement']\" [routerLinkActive]=\"['active']\">Beningno povećanje</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Prostate = /** @class */ (function () {
    function Prostate(api, router) {
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
    Prostate.prototype.ngOnInit = function () {
        this.getPage(this.router.url);
    };
    Prostate.prototype.getPage = function (url) {
        var _this = this;
        this.api.getPage(url).subscribe(function (response) {
            _this.html = response;
        });
    };
    Prostate.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Prostate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'prostate',
            template: __webpack_require__(/*! raw-loader!./prostate.html */ "./node_modules/raw-loader/index.js!./src/app/pages/prostate/prostate.html"),
            styles: [__webpack_require__(/*! ./prostate.scss */ "./src/app/pages/prostate/prostate.scss")]
        })
    ], Prostate);
    return Prostate;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _prostate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prostate.component */ "./src/app/pages/prostate/prostate.component.ts");
/* harmony import */ var _prostate_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prostate.routing */ "./src/app/pages/prostate/prostate.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







var ProstateModule = /** @class */ (function () {
    function ProstateModule() {
    }
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
    return ProstateModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _prostate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prostate.component */ "./src/app/pages/prostate/prostate.component.ts");




var routes = [
    {
        path: '',
        component: _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"],
        children: [
            { path: 'general', component: _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"] },
            { path: 'cancer', component: _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"] },
            { path: 'inflamation', component: _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"] },
            { path: 'stones', component: _prostate_component__WEBPACK_IMPORTED_MODULE_3__["Prostate"] },
        ],
    },
];
var ProstateRoutingModule = /** @class */ (function () {
    function ProstateRoutingModule() {
    }
    ProstateRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProstateRoutingModule);
    return ProstateRoutingModule;
}());



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
//# sourceMappingURL=pages-prostate-prostate-module-es5.js.map