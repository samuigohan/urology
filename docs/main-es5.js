(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <header>\r\n\r\n  </header>\r\n  <div class=\"content\">\r\n    <div class=\"parallax-section\" [ngClass]=\"{ 'subpage': subpage }\">\r\n    </div>\r\n    <div class=\"main-title\" [ngClass]=\"{ 'subpage': subpage }\">\r\n      <a [routerLink]=\"['/']\">\r\n        UROLOGIJA.HR\r\n    </a>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <footer>\r\n    Copyright, contact etc.\r\n  </footer>\r\n</div>\r\n\r\n<button (click)=\"scrollToTop()\" id=\"btnScrollToTop\" title=\"Go to top\">\r\n  <i class=\"fas fa-arrow-up\"></i>  \r\n  <div class=\"shine\"></div>\r\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/faq/faq.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/faq/faq.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"faq-wrapper\" [ngClass]=\"{ 'displayed': displayed }\" *ngIf=\"html\">\r\n    <div class=\"faq-button\" (click)=\"toggleFaq()\">\r\n        FAQ\r\n        <div class=\"shine\"></div>\r\n    </div>\r\n    <div class=\"faq-content\" [innerHTML]=\"html\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/kidney/kidney.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/kidney/kidney.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Bubreg</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/kidney/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/kidney/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/kidney/inflamation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/kidney/stones']\" [routerLinkActive]=\"['active']\">Kamenci</a>\r\n        <a [routerLink]=\"['/kidney/cists']\" [routerLinkActive]=\"['active']\">Ciste</a>\r\n        <a [routerLink]=\"['/kidney/transplant']\" [routerLinkActive]=\"['active']\">Transplantacija</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"section-title\">\r\n        Organi\r\n    </div>\r\n\r\n    <div class=\"icon-list\">\r\n        <div class=\"flex\">\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/kidney.svg\">\r\n                    <div class=\"title kidney\">Bubreg</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/inflamation'\">Upala</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/stones'\">Kamenci</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/cists'\">Ciste</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/transplant'\">Transplantacija</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/urethra.svg\">\r\n                    <div class=\"title urethra\">Mokraćovod</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'urethra/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'urethra/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'urethra/stones'\">Kamenci</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/bladder.svg\">\r\n                    <div class=\"title bladder\">Mjerhur</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/inflamation'\">Upala</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/stones'\">Kamenci</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/prostate.svg\">\r\n                    <div class=\"title prostate\">Prostata</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>Građa i funkcija</li>\r\n                            <li>Karcinom</li>\r\n                            <li>Upala</li>\r\n                            <li>Benigno povećanje</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex\">\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/testis.svg\">\r\n                    <div class=\"title testis\">Testis</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"['testis']\">\r\n                                    Građa i funkcija\r\n                                </a>\r\n                            </li>\r\n                            <li>Karcinom</li>\r\n                            <li>Upala</li>\r\n                            <li>Hidrokela i spermatokela</li>\r\n                            <li>Varikokela</li>\r\n                            <li>Torzija testisa</li>\r\n                            <li>Neplodnost</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/penis.svg\">\r\n                    <div class=\"title penis\">Penis</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>Građa i funkcija</li>\r\n                            <li>Karcinom</li>\r\n                            <li>Fimoza</li>\r\n                            <li>Kratki frenulum</li>\r\n                            <li>Induratio penis plastica</li>\r\n                            <li>Spolna nemoć</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/ureter.svg\">\r\n                    <div class=\"title ureter\">Mokraćna cijev</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>Građa i funkcija</li>\r\n                            <li>Karcinom</li>\r\n                            <li>Upala</li>\r\n                            <li>Suženje</li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"secondary\">\r\n    <div>\r\n        <div class=\"section-title\">\r\n            O stranici\r\n        </div>\r\n        The standard chunk of Lorem Ipsum used since the 1500s is reproduced\r\n        below\r\n        for those interested.\r\n        <br>\r\n        <br>Sections 1.10.32 and 1.10.33 from \"de Finibus\r\n        Bonorum\r\n        et Malorum\" by Cicero are also reproduced in their exact original form,\r\n        accompanied by English versions from the 1914 translation by H. Rackham.\r\n        <br>\r\n        <br>\r\n        The standard chunk of Lorem Ipsum used since the 1500s is reproduced\r\n        below\r\n        for those interested.\r\n        <br>\r\n        <br>Sections 1.10.32 and 1.10.33 from \"de Finibus\r\n        Bonorum\r\n        et Malorum\" by Cicero are also reproduced in their exact original form,\r\n        accompanied by English versions from the 1914 translation by H. Rackham.\r\n        The standard chunk of Lorem Ipsum used since the 1500s is reproduced\r\n        below\r\n        for those interested.\r\n        <br>Sections 1.10.32 and 1.10.33 from \"de Finibus\r\n        Bonorum\r\n        et Malorum\" by Cicero are also reproduced in their exact original form,\r\n        accompanied by English versions from the 1914 translation by H. Rackham.\r\n        <br>\r\n        <br>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <div class=\"section-title\">\r\n            O autoru\r\n        </div>\r\n        The standard chunk of Lorem Ipsum used since the 1500s is reproduced\r\n        below\r\n        for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus\r\n        Bonorum\r\n        et Malorum\" by Cicero are also reproduced in their exact original form,\r\n        accompanied by English versions from the 1914 translation by H. Rackham.\r\n        <br>\r\n        <br>\r\n        The standard chunk of Lorem Ipsum used since the 1500s is reproduced\r\n        below\r\n        for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus\r\n        Bonorum\r\n        et Malorum\" by Cicero are also reproduced in their exact original form,\r\n        accompanied by English versions from the 1914 translation by H. Rackham.\r\n        <br>\r\n        <br>\r\n        The standard chunk of Lorem Ipsum used since the 1500s is reproduced\r\n        below\r\n        for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus\r\n        Bonorum\r\n        et Malorum\" by Cicero are also reproduced in their exact original form,\r\n        accompanied by English versions from the 1914 translation by H. Rackham.\r\n        <br>\r\n        <br>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    // pageUrl example: 'kidneys/cancer'
    ApiService.prototype.getPage = function (pageUrl) {
        return this.http.get("assets/html/" + pageUrl + ".html", { responseType: 'text' });
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");




var routes = [
    {
        path: '',
        component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["Landing"],
    },
    {
        path: 'kidney',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/kidney/kidney.module */ "./src/app/pages/kidney/kidney.module.ts")).then(function (m) { return m.KidneyModule; }); }
    },
    {
        path: 'urethra',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-urethra-urethra-module */ "pages-urethra-urethra-module").then(__webpack_require__.bind(null, /*! ./pages/urethra/urethra.module */ "./src/app/pages/urethra/urethra.module.ts")).then(function (m) { return m.UrethraModule; }); }
    },
    {
        path: 'bladder',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-bladder-bladder-module */ "pages-bladder-bladder-module").then(__webpack_require__.bind(null, /*! ./pages/bladder/bladder.module */ "./src/app/pages/bladder/bladder.module.ts")).then(function (m) { return m.BladderModule; }); }
    },
    {
        path: 'prostate',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-prostate-prostate-module */ "pages-prostate-prostate-module").then(__webpack_require__.bind(null, /*! ./pages/prostate/prostate.module */ "./src/app/pages/prostate/prostate.module.ts")).then(function (m) { return m.ProstateModule; }); }
    },
    {
        path: 'testis',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-testis-testis-module */ "pages-testis-testis-module").then(__webpack_require__.bind(null, /*! ./pages/testis/testis.module */ "./src/app/pages/testis/testis.module.ts")).then(function (m) { return m.TestisModule; }); }
    },
    {
        path: 'penis',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-penis-penis-module */ "pages-penis-penis-module").then(__webpack_require__.bind(null, /*! ./pages/penis/penis.module */ "./src/app/pages/penis/penis.module.ts")).then(function (m) { return m.PenisModule; }); }
    },
    {
        path: 'ureter',
        loadChildren: function () { return __webpack_require__.e(/*! import() | pages-ureter-ureter-module */ "pages-ureter-ureter-module").then(__webpack_require__.bind(null, /*! ./pages/ureter/ureter.module */ "./src/app/pages/ureter/ureter.module.ts")).then(function (m) { return m.UreterModule; }); }
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax-section {\n  opacity: 1;\n  position: relative;\n  -webkit-transition: margin-top 0.35s ease-in-out;\n  transition: margin-top 0.35s ease-in-out;\n  width: 100%;\n  background-position: 50% 0;\n  height: 400px;\n  background-image: url('landing_bg.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n  margin-bottom: 16px;\n  -webkit-transition: height 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), opacity 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: height 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), opacity 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n}\n.parallax-section.subpage {\n  height: 0px;\n  opacity: 0;\n}\n.main-title {\n  position: absolute;\n  top: 240px;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #ffffff;\n  font-weight: 900;\n  text-shadow: 0px 0px 5px #000000;\n  -webkit-transition: top 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), font-size 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), font-size 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  font-size: 16px;\n}\n.main-title.subpage {\n  font-size: 24px;\n  top: 24px;\n}\n@media screen and (min-width: 384px) {\n  .main-title {\n    font-size: 24px;\n  }\n}\n@media screen and (min-width: 540px) {\n  .main-title {\n    font-size: 40px;\n  }\n}\n@media screen and (min-width: 960px) {\n  .main-title {\n    font-size: 64px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .main-title {\n    font-size: 72px;\n  }\n}\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n}\n.wrapper header,\n.wrapper footer {\n  width: 100%;\n  height: 48px;\n  background-color: #121212;\n  text-align: center;\n  line-height: 48px;\n}\n.wrapper .content {\n  background-color: #242428;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFx0aGVtZS5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQ1FXO0VEUFgsbUJBQUE7RUFDQSxpSEFBQTtFQUFBLHlHQUFBO0FFREY7QUZHRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FFREo7QUZLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsY0NwQmM7RURxQmQsZ0JBQUE7RUFDQSxnQ0NyQlk7RURzQlosZ0hBQUE7RUFBQSx3R0FBQTtFQUtBLGVDdEJhO0FDZ0JmO0FGRUU7RUFDRSxlQ3BCVztFRHFCWCxTQUFBO0FFQUo7QUZHRTtFQWRGO0lBZUksZUN6Qlc7RUN5QmI7QUFDRjtBRkNFO0VBakJGO0lBa0JJLGVDN0JXO0VDK0JiO0FBQ0Y7QUZERTtFQXBCRjtJQXFCSSxlQ2pDVztFQ3FDYjtBQUNGO0FGSEU7RUF2QkY7SUF3QkksZUNyQ1k7RUMyQ2Q7QUFDRjtBRkhBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUVNRjtBRkxFOztFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJDdERZO0VEdURaLGtCQUFBO0VBQ0EsaUJBQUE7QUVPSjtBRkpFO0VBQ0UseUJDOURXO0VEZ0VYLG1CQUFBO1VBQUEsY0FBQTtBRUtKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3RoZW1lLnNjc3NcIjtcclxuXHJcbi5wYXJhbGxheC1zZWN0aW9uIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAwO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nX2JnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcblxyXG4gICYuc3VicGFnZSB7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjQwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAkY29sb3ItdHh0LXByaTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBmb250LXNpemUgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbiAgJi5zdWJwYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuICAgIHRvcDogMjRweDtcclxuICB9XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLW5tO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4NHB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4bDtcclxuICB9XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVhZGVyLFxyXG4gIGZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZy1iYXJzO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItYmctcHJpO1xyXG4gICAgLy8gU3RyZXRjaCB0aGUgY29udGVudCBzbyB0aGF0IHBhZ2UgYWx3YXlzIGZpbGxzIHRoZSBzY3JlZW46XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIEJhY2tncm91bmRzOlxyXG4kY29sb3ItYmctcHJpOiAjMjQyNDI4O1xyXG4kY29sb3ItYmctc2VjOiAjMjkyYzMzO1xyXG4kY29sb3ItYmctYmFyczogIzEyMTIxMjtcclxuXHJcbi8vIFRleHQ6XHJcbiRjb2xvci10eHQtcHJpOiAjZmZmZmZmO1xyXG4kdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XHJcbiRmb250LXNpemUteHhsOiA3MnB4O1xyXG4kZm9udC1zaXplLXhsOiA2NHB4O1xyXG4kZm9udC1zaXplLWxnOiA0MHB4O1xyXG4kZm9udC1zaXplLW1kOiAyNHB4O1xyXG4kZm9udC1zaXplLW5tOiAxNnB4O1xyXG4kZm9udC1zaXplLXNtOiAxMnB4O1xyXG5cclxuLy8gTWlzY2VsbGFuZXVzOlxyXG4kY29sb3ItaGw6ICMxMDYzY2Y7XHJcbiRjb2xvci1obC1zZWM6ICNkYTQ2MjY7XHJcbiRjb2xvci1mbGF0OiAjYmNiY2JjO1xyXG4kYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2IoMCAwIDAgLyA4MCUpO1xyXG5cclxuLy8gTGF5b3V0OlxyXG4kcGFkZGluZy1zdGQ6IDQwcHg7XHJcbiIsIi5wYXJhbGxheC1zZWN0aW9uIHtcbiAgb3BhY2l0eTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMzVzIGVhc2UtaW4tb3V0O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDA7XG4gIGhlaWdodDogNDAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uL2Fzc2V0cy9pbWFnZXMvbGFuZGluZ19iZy5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XG59XG4ucGFyYWxsYXgtc2VjdGlvbi5zdWJwYWdlIHtcbiAgaGVpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5tYWluLXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI0MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XG4gIHRyYW5zaXRpb246IHRvcCAwLjVzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgZm9udC1zaXplIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubWFpbi10aXRsZS5zdWJwYWdlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0b3A6IDI0cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzODRweCkge1xuICAubWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NDBweCkge1xuICAubWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xuICAubWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA2NHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLm1haW4tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNzJweDtcbiAgfVxufVxuXG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLndyYXBwZXIgaGVhZGVyLFxuLndyYXBwZXIgZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogNDhweDtcbn1cbi53cmFwcGVyIC5jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI0MjQyODtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.subpage = false;
        this.title = 'urology';
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event.url != "/") {
                    _this.subpage = true;
                }
                else {
                    _this.subpage = false;
                }
            }
        });
        var self = this;
        window.onscroll = function () { self.windowScrolled(); };
    }
    AppComponent.prototype.windowScrolled = function () {
        var btn = $('#btnScrollToTop');
        if ($(window).scrollTop() > 400) {
            $('#btnScrollToTop').addClass('displayed');
        }
        else {
            $('#btnScrollToTop').removeClass('displayed');
        }
    };
    AppComponent.prototype.scrollToTop = function () {
        $('html, body').stop().animate({ scrollTop: 0 }, 250, 'swing', function () { });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pages_landing_landing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landing/landing.module */ "./src/app/pages/landing/landing.module.ts");
/* harmony import */ var _pages_kidney_kidney_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/kidney/kidney.module */ "./src/app/pages/kidney/kidney.module.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _pages_landing_landing_module__WEBPACK_IMPORTED_MODULE_6__["LandingModule"],
                _pages_kidney_kidney_module__WEBPACK_IMPORTED_MODULE_7__["KidneyModule"],
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/faq/faq.component.ts ***!
  \*************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var FaqComponent = /** @class */ (function () {
    function FaqComponent(http) {
        this.http = http;
        this.faqCategory = null;
        this.faqSubcategory = null;
        this.html = '';
        this.displayed = false;
        this.ngOnChanges();
    }
    FaqComponent.prototype.toggleFaq = function () {
        this.displayed = !this.displayed;
        if (this.displayed) {
            $('body').addClass('no-scroll');
        }
        else {
            $('body').removeClass('no-scroll');
        }
    };
    FaqComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (!this.faqCategory) {
            return;
        }
        this.http.get("assets/html/" + this.faqCategory + "_faq.html", { responseType: 'text' }).subscribe(function (response) {
            _this.html = response.toString();
        }, function (error) {
            _this.html = null;
            _this.displayed = false;
        });
        var self = this;
        $(window).on('click', function (event) {
            var target = $(event.target);
            if (target.parents('.faq-wrapper').length > 0) {
                return;
            }
            if (self.displayed) {
                self.toggleFaq();
            }
        });
        $('.faq-button').on('click', function (event) {
            event.stopPropagation();
        });
    };
    FaqComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FaqComponent.prototype, "faqCategory", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FaqComponent.prototype, "faqSubcategory", void 0);
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'faq',
            template: __webpack_require__(/*! raw-loader!./faq.html */ "./node_modules/raw-loader/index.js!./src/app/components/faq/faq.html"),
            styles: [__webpack_require__(/*! ./faq.scss */ "./src/app/components/faq/faq.scss")]
        })
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/components/faq/faq.scss":
/*!*****************************************!*\
  !*** ./src/app/components/faq/faq.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faq-wrapper {\n  position: fixed;\n  left: calc(100% - 0px);\n  top: 0px;\n  height: 100vh;\n  position: fixed;\n  display: inline-block;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: -webkit-transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), -webkit-transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  width: calc(100vw - 40px);\n}\n.faq-wrapper.displayed {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.faq-wrapper.displayed .faq-button {\n  opacity: 1;\n}\n@media screen and (min-width: 960px) {\n  .faq-wrapper {\n    width: 80vw;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .faq-wrapper {\n    width: 70vw;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .faq-wrapper {\n    width: 60vw;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .faq-wrapper {\n    width: 50vw;\n  }\n}\n.faq-wrapper .faq-button {\n  position: absolute;\n  overflow: hidden;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n  left: -40px;\n  top: calc(50% - 24px);\n  content: \" \";\n  height: 48px;\n  width: 40px;\n  background: #da4626;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  line-height: 48px;\n  text-align: center;\n}\n.faq-wrapper .faq-button:hover {\n  opacity: 1;\n}\n.faq-wrapper .shine {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  width: 70%;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  -webkit-transform: skewX(20deg) translateX(0);\n          transform: skewX(20deg) translateX(0);\n}\n.faq-wrapper .faq-content {\n  position: relative;\n  left: 0px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  padding: 24px;\n  height: 100vh;\n  background: #242428;\n  border-top-right-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n  max-height: 100%;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZhcVxcZmFxLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmFxL0Q6XFxwcm9qZWN0c19zYW5kYm94XFx1cm9sb2d5L3NyY1xcdGhlbWUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQ1dXO0VEVlgsNEVBQUE7RUFBQSxvRUFBQTtFQUFBLDREQUFBO0VBQUEsc0hBQUE7RUFTQSx5QkFBQTtBRVRGO0FGRUU7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FFQUo7QUZDSTtFQUNFLFVBQUE7QUVDTjtBRklFO0VBbEJGO0lBbUJJLFdBQUE7RUVERjtBQUNGO0FGRUU7RUFyQkY7SUFzQkksV0FBQTtFRUNGO0FBQ0Y7QUZBRTtFQXhCRjtJQXlCSSxXQUFBO0VFR0Y7QUFDRjtBRkZFO0VBM0JGO0lBNEJJLFdBQUE7RUVLRjtBQUNGO0FGSEU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJDMUJXO0VEMkJYLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FFS0o7QUZKSTtFQUNFLFVBQUE7QUVNTjtBRkZFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBRUlKO0FGREU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRUdKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xyXG5cclxuLmZhcS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogY2FsYygxMDAlIC0gMHB4KTtcclxuICB0b3A6IDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xyXG5cclxuICAmLmRpc3BsYXllZCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgLmZhcS1idXR0b24ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgd2lkdGg6IDcwdnc7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgd2lkdGg6IDYwdnc7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgfVxyXG5cclxuICAuZmFxLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAtNDBweDtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyNHB4KTtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaGwtc2VjO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zaGluZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG4gICAgdHJhbnNmb3JtOiBza2V3WCgyMGRlZykgdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcblxyXG4gIC5mYXEtY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzI0MjQyODtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYigwIDAgMCAvIDgwJSk7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcbn1cclxuIiwiXHJcbi8vIEJhY2tncm91bmRzOlxyXG4kY29sb3ItYmctcHJpOiAjMjQyNDI4O1xyXG4kY29sb3ItYmctc2VjOiAjMjkyYzMzO1xyXG4kY29sb3ItYmctYmFyczogIzEyMTIxMjtcclxuXHJcbi8vIFRleHQ6XHJcbiRjb2xvci10eHQtcHJpOiAjZmZmZmZmO1xyXG4kdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XHJcbiRmb250LXNpemUteHhsOiA3MnB4O1xyXG4kZm9udC1zaXplLXhsOiA2NHB4O1xyXG4kZm9udC1zaXplLWxnOiA0MHB4O1xyXG4kZm9udC1zaXplLW1kOiAyNHB4O1xyXG4kZm9udC1zaXplLW5tOiAxNnB4O1xyXG4kZm9udC1zaXplLXNtOiAxMnB4O1xyXG5cclxuLy8gTWlzY2VsbGFuZXVzOlxyXG4kY29sb3ItaGw6ICMxMDYzY2Y7XHJcbiRjb2xvci1obC1zZWM6ICNkYTQ2MjY7XHJcbiRjb2xvci1mbGF0OiAjYmNiY2JjO1xyXG4kYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2IoMCAwIDAgLyA4MCUpO1xyXG5cclxuLy8gTGF5b3V0OlxyXG4kcGFkZGluZy1zdGQ6IDQwcHg7XHJcbiIsIi5mYXEtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogY2FsYygxMDAlIC0gMHB4KTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xufVxuLmZhcS13cmFwcGVyLmRpc3BsYXllZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4uZmFxLXdyYXBwZXIuZGlzcGxheWVkIC5mYXEtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5mYXEtd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZmFxLXdyYXBwZXIge1xuICAgIHdpZHRoOiA3MHZ3O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZhcS13cmFwcGVyIHtcbiAgICB3aWR0aDogNjB2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5mYXEtd3JhcHBlciB7XG4gICAgd2lkdGg6IDUwdnc7XG4gIH1cbn1cbi5mYXEtd3JhcHBlciAuZmFxLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAtNDBweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDI0cHgpO1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogI2RhNDYyNjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmFxLXdyYXBwZXIgLmZhcS1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmZhcS13cmFwcGVyIC5zaGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogc2tld1goMjBkZWcpIHRyYW5zbGF0ZVgoMCk7XG59XG4uZmFxLXdyYXBwZXIgLmZhcS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMyNDI0Mjg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/directives/svg.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/directives/svg.directive.ts ***!
  \*********************************************/
/*! exports provided: SvgDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgDirective", function() { return SvgDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// ./app/shared/hidden.directive.ts

// Directive decorator
var SvgDirective = /** @class */ (function () {
    function SvgDirective(el, renderer) {
        window.setTimeout(function () {
            var $img = jQuery(el.nativeElement);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');
            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');
                // Add replaced image's ID to the new SVG
                if (typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                setTimeout(function () {
                    if (typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' loaded');
                    }
                    else {
                        $svg = $svg.attr('class', 'loaded');
                    }
                }, 25);
                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');
                // Replace image with new SVG
                $img.replaceWith($svg);
            }, 'xml');
        });
    }
    SvgDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
    SvgDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[svg]' })
        // Directive class
    ], SvgDirective);
    return SvgDirective;
}());



/***/ }),

/***/ "./src/app/pages/kidney/kidney.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/kidney/kidney.component.ts ***!
  \**************************************************/
/*! exports provided: Kidney */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Kidney", function() { return Kidney; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var Kidney = /** @class */ (function () {
    function Kidney(api, router) {
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
    Kidney.prototype.ngOnInit = function () {
        this.getPage(this.router.url);
    };
    Kidney.prototype.getPage = function (url) {
        var _this = this;
        this.api.getPage(url).subscribe(function (response) {
            _this.html = response;
        });
    };
    Kidney.ctorParameters = function () { return [
        { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    Kidney = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kidney',
            template: __webpack_require__(/*! raw-loader!./kidney.html */ "./node_modules/raw-loader/index.js!./src/app/pages/kidney/kidney.html"),
            styles: [__webpack_require__(/*! ./kidney.scss */ "./src/app/pages/kidney/kidney.scss")]
        })
    ], Kidney);
    return Kidney;
}());



/***/ }),

/***/ "./src/app/pages/kidney/kidney.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/kidney/kidney.module.ts ***!
  \***********************************************/
/*! exports provided: KidneyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidneyModule", function() { return KidneyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _kidney_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kidney.component */ "./src/app/pages/kidney/kidney.component.ts");
/* harmony import */ var _kidney_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kidney.routing */ "./src/app/pages/kidney/kidney.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







var KidneyModule = /** @class */ (function () {
    function KidneyModule() {
    }
    KidneyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"],
            ],
            declarations: [
                _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _kidney_routing__WEBPACK_IMPORTED_MODULE_4__["KidneyRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ],
            providers: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            ]
        })
    ], KidneyModule);
    return KidneyModule;
}());



/***/ }),

/***/ "./src/app/pages/kidney/kidney.routing.ts":
/*!************************************************!*\
  !*** ./src/app/pages/kidney/kidney.routing.ts ***!
  \************************************************/
/*! exports provided: KidneyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KidneyRoutingModule", function() { return KidneyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _kidney_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kidney.component */ "./src/app/pages/kidney/kidney.component.ts");




var routes = [
    {
        path: '',
        component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"],
        children: [
            { path: 'general', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"] },
            { path: 'cancer', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"] },
            { path: 'inflamation', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"] },
            { path: 'stones', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"] },
            { path: 'cists', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"] },
            { path: 'transplant', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"] },
        ],
    },
];
var KidneyRoutingModule = /** @class */ (function () {
    function KidneyRoutingModule() {
    }
    KidneyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], KidneyRoutingModule);
    return KidneyRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/kidney/kidney.scss":
/*!******************************************!*\
  !*** ./src/app/pages/kidney/kidney.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2tpZG5leS9raWRuZXkuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/landing/landing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/landing/landing.component.ts ***!
  \****************************************************/
/*! exports provided: Landing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return Landing; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




var Landing = /** @class */ (function () {
    function Landing(router) {
        this.router = router;
    }
    Landing.prototype.ngOnInit = function () {
        this.createParallax();
    };
    Landing.prototype.createParallax = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.parallax-section').each(function () {
            var $el = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            jquery__WEBPACK_IMPORTED_MODULE_3__(window).on('scroll', function () {
                updateBackground($el);
            });
            updateBackground($el);
        });
        function updateBackground($el) {
            var speed = 0.4;
            var diff = jquery__WEBPACK_IMPORTED_MODULE_3__(window).scrollTop() - $el.offset().top;
            var yPos = -(diff * speed);
            var coords = '50% ' + yPos + 'px';
            $el.css({
                backgroundPosition: coords
            });
        }
    };
    Landing.prototype.navigate = function (route) {
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__('html, body').stop().animate({ scrollTop: 0 }, 250, 'swing', function () {
            self.router.navigateByUrl(route);
        });
    };
    Landing.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    Landing = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'landing',
            template: __webpack_require__(/*! raw-loader!./landing.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.html"),
            styles: [__webpack_require__(/*! ./landing.scss */ "./src/app/pages/landing/landing.scss")]
        })
    ], Landing);
    return Landing;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var src_app_directives_svg_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/svg.directive */ "./src/app/directives/svg.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LandingModule = /** @class */ (function () {
    function LandingModule() {
    }
    LandingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _landing_component__WEBPACK_IMPORTED_MODULE_3__["Landing"],
                src_app_directives_svg_directive__WEBPACK_IMPORTED_MODULE_4__["SvgDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            ],
            exports: [
                _landing_component__WEBPACK_IMPORTED_MODULE_3__["Landing"],
            ]
        })
    ], LandingModule);
    return LandingModule;
}());



/***/ }),

/***/ "./src/app/pages/landing/landing.scss":
/*!********************************************!*\
  !*** ./src/app/pages/landing/landing.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-list {\n  margin: 40px;\n}\n\n:host::ng-deep .icon-list svg {\n  width: 64px;\n  height: 64px;\n  position: absolute;\n  top: 48px;\n  left: 68px;\n  /*transform: translate(-75%, -50%);*/\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n}\n\n:host::ng-deep .icon-list .flex > div > div:hover svg {\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  width: 16px;\n  height: 16px;\n  top: 16px;\n  left: 16px;\n}\n\n:host::ng-deep .icon-list .flex > div > div:hover svg path {\n  stroke: #da4626;\n  fill: #da4626;\n}\n\n.icon-list .title {\n  text-align: center;\n  position: absolute;\n  top: 128px;\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n}\n\n.title.kidney {\n  left: 66px;\n}\n\n.title.ureter {\n  left: 29px;\n}\n\n.title.urethra {\n  left: 41px;\n}\n\n.title.bladder {\n  left: 60px;\n}\n\n.title.prostate {\n  left: 60px;\n}\n\n.title.testis {\n  left: 75px;\n}\n\n.title.penis {\n  left: 77px;\n}\n\n.icon-list ul li:hover {\n  color: #1063cf;\n}\n\n.icon-list .flex > div > div:hover .title {\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  top: 15px;\n  left: 40px;\n  color: #da4626;\n}\n\n.icon-list ul {\n  opacity: 0;\n  padding: 0px;\n  text-align: left;\n  margin-top: 24px;\n  -webkit-transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  width: 160px;\n  overflow: visible;\n  margin-left: 18px;\n  line-height: 125%;\n  list-style-type: none;\n}\n\n.icon-list ul li {\n  padding: 0px;\n  font-size: 12px;\n  overflow: visible;\n}\n\n.icon-list .flex > div > div:hover ul {\n  opacity: 1;\n  -webkit-transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n}\n\n.flex {\n  max-width: 1024px;\n  margin-bottom: 40px;\n  margin-bottom: 32px !important;\n  margin: 0 auto;\n  text-transform: uppercase;\n}\n\n.flex > div {\n  position: relative;\n  display: inline-block;\n  width: 25%;\n  vertical-align: middle;\n}\n\n@media screen and (max-width: 960px) {\n  .flex > div {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .flex > div {\n    width: 100%;\n  }\n}\n\n.flex > div > div {\n  position: relative;\n  margin: 0 auto;\n  width: 200px;\n  height: 200px;\n  padding-top: 20px;\n  /* border: 1px solid #444; */\n  /*box-shadow: 0px 0px 15px rgb(0 0 0 / 50%);*/\n  border-radius: 12px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9EOlxccHJvamVjdHNfc2FuZGJveFxcdXJvbG9neS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXGxhbmRpbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxnT0FBQTtFQUFBLHdOQUFBO0FDSEo7O0FETUU7RUFDRSxnT0FBQTtFQUFBLHdOQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRE9JO0VBQ0UsZUVUUztFRlVULGFFVlM7QURLZjs7QURVQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMktBQUE7RUFBQSxtS0FBQTtBQ1BGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsVUFBQTtBQ1JGOztBRFdBO0VBQ0UsY0FBQTtBQ1JGOztBRFdBO0VBQ0UsMktBQUE7RUFBQSxtS0FBQTtFQUVBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0U1RGE7QURtRGY7O0FEWUE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3RUFBQTtFQUFBLGdFQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDVEY7O0FEWUE7RUFDRSxZQUFBO0VBQ0EsZUVsRmE7RUZtRmIsaUJBQUE7QUNURjs7QURZQTtFQUNFLFVBQUE7RUFDQSx3RUFBQTtFQUFBLGdFQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ1RGOztBRFlBO0VBSUUsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDWkY7O0FEYUU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDWEo7O0FEYUk7RUFORjtJQU9NLFVBQUE7RUNWTjtBQUNGOztBRFdJO0VBVEY7SUFVTSxXQUFBO0VDUk47QUFDRjs7QURVSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDUlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5kaW5nL2xhbmRpbmcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS5zY3NzXCI7XHJcblxyXG4uaWNvbi1saXN0IHtcclxuICBtYXJnaW46IDQwcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdDo6bmctZGVlcCB7XHJcbiAgLmljb24tbGlzdCBzdmcge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ4cHg7XHJcbiAgICBsZWZ0OiA2OHB4O1xyXG4gICAgLyp0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNzUlLCAtNTAlKTsqL1xyXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLFxyXG4gICAgICB3aWR0aCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgaGVpZ2h0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xyXG4gIH1cclxuICAuaWNvbi1saXN0IC5mbGV4ID4gZGl2ID4gZGl2OmhvdmVyIHN2ZyB7XHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIGxlZnQgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksXHJcbiAgICAgIHdpZHRoIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBoZWlnaHQgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHRvcDogMTZweDtcclxuICAgIGxlZnQ6IDE2cHg7XHJcblxyXG4gICAgcGF0aCB7XHJcbiAgICAgIHN0cm9rZTogJGNvbG9yLWhsLXNlYztcclxuICAgICAgZmlsbDogJGNvbG9yLWhsLXNlYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5pY29uLWxpc3QgLnRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTI4cHg7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLFxyXG4gICAgd2lkdGggMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbn1cclxuXHJcbi50aXRsZS5raWRuZXkge1xyXG4gIGxlZnQ6IDY2cHg7XHJcbn1cclxuXHJcbi50aXRsZS51cmV0ZXIge1xyXG4gIGxlZnQ6IDI5cHg7XHJcbn1cclxuXHJcbi50aXRsZS51cmV0aHJhIHtcclxuICBsZWZ0OiA0MXB4O1xyXG59XHJcblxyXG4udGl0bGUuYmxhZGRlciB7XHJcbiAgbGVmdDogNjBweDtcclxufVxyXG5cclxuLnRpdGxlLnByb3N0YXRlIHtcclxuICBsZWZ0OiA2MHB4O1xyXG59XHJcblxyXG4udGl0bGUudGVzdGlzIHtcclxuICBsZWZ0OiA3NXB4O1xyXG59XHJcblxyXG4udGl0bGUucGVuaXMge1xyXG4gIGxlZnQ6IDc3cHg7XHJcbn1cclxuXHJcbi5pY29uLWxpc3QgdWwgbGk6aG92ZXIge1xyXG4gIGNvbG9yOiAjMTA2M2NmO1xyXG59XHJcblxyXG4uaWNvbi1saXN0IC5mbGV4ID4gZGl2ID4gZGl2OmhvdmVyIC50aXRsZSB7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLFxyXG4gICAgd2lkdGggMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbiAgdG9wOiAxNXB4O1xyXG4gIGxlZnQ6IDQwcHg7XHJcbiAgY29sb3I6ICRjb2xvci1obC1zZWM7XHJcbn1cclxuXHJcbi5pY29uLWxpc3QgdWwge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBtYXJnaW4tbGVmdDogMThweDtcclxuICBsaW5lLWhlaWdodDogMTI1JTtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5pY29uLWxpc3QgdWwgbGkge1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBmb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgdWwge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgLy9kaXNwbGF5OiBmbGV4O1xyXG4gIC8vZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAvL2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBtYXgtd2lkdGg6IDEwMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHggIWltcG9ydGFudDsgIFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgPiBkaXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQwcHgpIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICA+IGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICM0NDQ7ICovXHJcbiAgICAgICAgLypib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDAgMCAwIC8gNTAlKTsqL1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5pY29uLWxpc3Qge1xuICBtYXJnaW46IDQwcHg7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5pY29uLWxpc3Qgc3ZnIHtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ4cHg7XG4gIGxlZnQ6IDY4cHg7XG4gIC8qdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTc1JSwgLTUwJSk7Ki9cbiAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCB3aWR0aCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgaGVpZ2h0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xufVxuOmhvc3Q6Om5nLWRlZXAgLmljb24tbGlzdCAuZmxleCA+IGRpdiA+IGRpdjpob3ZlciBzdmcge1xuICB0cmFuc2l0aW9uOiB0b3AgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIGxlZnQgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIHdpZHRoIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBoZWlnaHQgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIHRvcDogMTZweDtcbiAgbGVmdDogMTZweDtcbn1cbjpob3N0OjpuZy1kZWVwIC5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgc3ZnIHBhdGgge1xuICBzdHJva2U6ICNkYTQ2MjY7XG4gIGZpbGw6ICNkYTQ2MjY7XG59XG5cbi5pY29uLWxpc3QgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTI4cHg7XG4gIHRyYW5zaXRpb246IHRvcCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgbGVmdCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgd2lkdGggMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XG59XG5cbi50aXRsZS5raWRuZXkge1xuICBsZWZ0OiA2NnB4O1xufVxuXG4udGl0bGUudXJldGVyIHtcbiAgbGVmdDogMjlweDtcbn1cblxuLnRpdGxlLnVyZXRocmEge1xuICBsZWZ0OiA0MXB4O1xufVxuXG4udGl0bGUuYmxhZGRlciB7XG4gIGxlZnQ6IDYwcHg7XG59XG5cbi50aXRsZS5wcm9zdGF0ZSB7XG4gIGxlZnQ6IDYwcHg7XG59XG5cbi50aXRsZS50ZXN0aXMge1xuICBsZWZ0OiA3NXB4O1xufVxuXG4udGl0bGUucGVuaXMge1xuICBsZWZ0OiA3N3B4O1xufVxuXG4uaWNvbi1saXN0IHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMxMDYzY2Y7XG59XG5cbi5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgLnRpdGxlIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCB3aWR0aCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiA0MHB4O1xuICBjb2xvcjogI2RhNDYyNjtcbn1cblxuLmljb24tbGlzdCB1bCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5pY29uLWxpc3QgdWwgbGkge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgdWwge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG4uZmxleCB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZsZXggPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1JTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5mbGV4ID4gZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuZmxleCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mbGV4ID4gZGl2ID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzQ0NDsgKi9cbiAgLypib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDAgMCAwIC8gNTAlKTsqL1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiXHJcbi8vIEJhY2tncm91bmRzOlxyXG4kY29sb3ItYmctcHJpOiAjMjQyNDI4O1xyXG4kY29sb3ItYmctc2VjOiAjMjkyYzMzO1xyXG4kY29sb3ItYmctYmFyczogIzEyMTIxMjtcclxuXHJcbi8vIFRleHQ6XHJcbiRjb2xvci10eHQtcHJpOiAjZmZmZmZmO1xyXG4kdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XHJcbiRmb250LXNpemUteHhsOiA3MnB4O1xyXG4kZm9udC1zaXplLXhsOiA2NHB4O1xyXG4kZm9udC1zaXplLWxnOiA0MHB4O1xyXG4kZm9udC1zaXplLW1kOiAyNHB4O1xyXG4kZm9udC1zaXplLW5tOiAxNnB4O1xyXG4kZm9udC1zaXplLXNtOiAxMnB4O1xyXG5cclxuLy8gTWlzY2VsbGFuZXVzOlxyXG4kY29sb3ItaGw6ICMxMDYzY2Y7XHJcbiRjb2xvci1obC1zZWM6ICNkYTQ2MjY7XHJcbiRjb2xvci1mbGF0OiAjYmNiY2JjO1xyXG4kYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2IoMCAwIDAgLyA4MCUpO1xyXG5cclxuLy8gTGF5b3V0OlxyXG4kcGFkZGluZy1zdGQ6IDQwcHg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            providers: [],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__["FaqComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects_sandbox\urology\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map