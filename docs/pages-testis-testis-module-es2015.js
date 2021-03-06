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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seo.service */ "./src/app/seo.service.ts");





let Testis = class Testis {
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
Testis.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }
];
Testis = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'testis',
        template: __webpack_require__(/*! raw-loader!./testis.html */ "./node_modules/raw-loader/index.js!./src/app/pages/testis/testis.html"),
        styles: [__webpack_require__(/*! ./testis.scss */ "./src/app/pages/testis/testis.scss")]
    })
], Testis);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _testis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testis.component */ "./src/app/pages/testis/testis.component.ts");
/* harmony import */ var _testis_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testis.routing */ "./src/app/pages/testis/testis.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







let TestisModule = class TestisModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");
/* harmony import */ var _testis_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testis.component */ "./src/app/pages/testis/testis.component.ts");





const routes = [
    {
        path: '',
        component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"],
        children: [
            { path: 'general', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.general },
            { path: 'cancer', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.cancer },
            { path: 'inflammation', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.inflammation },
            { path: 'hydrocele', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.hydrocele },
            { path: 'varicocele', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.varicocele },
            { path: 'torsion', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.torsion },
            { path: 'infertility', component: _testis_component__WEBPACK_IMPORTED_MODULE_4__["Testis"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_3__["SectionsMetadata"].testis.infertility },
        ],
    },
];
let TestisRoutingModule = class TestisRoutingModule {
};
TestisRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TestisRoutingModule);



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
//# sourceMappingURL=pages-testis-testis-module-es2015.js.map