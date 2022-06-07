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

module.exports = "<div class=\"wrapper\">\r\n  <header>\r\n\r\n  </header>\r\n  <div class=\"content\">\r\n    <div class=\"parallax-section\" [ngClass]=\"{ 'subpage': subpage }\">\r\n      <video src=\"assets/video/landing_video.mp4\" autoplay loop style=\"display: none;\"></video>\r\n    </div>\r\n    <div class=\"main-title\" [ngClass]=\"{ 'subpage': subpage }\">\r\n      <a [routerLink]=\"['/']\">\r\n        UROLOGIJA.HR\r\n    </a>\r\n    </div>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <footer>\r\n    Svi materijali su vlasništvo www.urologija.hr. Zabranjeno je neovlašteno kopiranje i korištenje istih. \r\n  </footer>\r\n</div>\r\n\r\n<button (click)=\"scrollToTop()\" id=\"btnScrollToTop\" title=\"Go to top\">\r\n  <i class=\"fas fa-arrow-up\"></i>  \r\n  <div class=\"shine\"></div>\r\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/faq/faq.html":
/*!*******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/faq/faq.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"faq-wrapper\" [ngClass]=\"{ 'displayed': displayed }\" *ngIf=\"html\">\r\n    <div class=\"faq-button\" (click)=\"toggleFaq()\" title=\"Pitanja i odgovori\">\r\n        PiO\r\n        <div class=\"shine\"></div>\r\n    </div>\r\n    <div class=\"faq-content\" [innerHTML]=\"html\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/kidney/kidney.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/kidney/kidney.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"page-title\">Bubreg</div>\r\n    <div class=\"page-menu\">\r\n        <a [routerLink]=\"['/kidney/general']\" [routerLinkActive]=\"['active']\">Građa i funkcija</a>\r\n        <a [routerLink]=\"['/kidney/cancer']\" [routerLinkActive]=\"['active']\">Karcinom</a>\r\n        <a [routerLink]=\"['/kidney/inflammation']\" [routerLinkActive]=\"['active']\">Upala</a>\r\n        <a [routerLink]=\"['/kidney/stones']\" [routerLinkActive]=\"['active']\">Kamenci</a>\r\n        <a [routerLink]=\"['/kidney/cists']\" [routerLinkActive]=\"['active']\">Ciste</a>\r\n        <a [routerLink]=\"['/kidney/transplant']\" [routerLinkActive]=\"['active']\">Transplantacija</a>\r\n    </div>\r\n    <div class=\"page-content\" *ngIf=\"html\" [innerHTML]=\"html\">\r\n    </div>\r\n</section>\r\n<faq [faqCategory]=\"faqCategory\"></faq>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/landing/landing.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n    <div class=\"section-title\">\r\n        Organi\r\n    </div>\r\n\r\n    <div class=\"icon-list\">\r\n        <div class=\"flex\">\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/kidney.svg\">\r\n                    <div class=\"title kidney\">Bubreg</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/inflammation'\">Upala</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/stones'\">Kamenci</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/cists'\">Ciste</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'kidney/transplant'\">Transplantacija</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/ureter.svg\">\r\n                    <div class=\"title urethra\">Mokraćovod</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'urethra/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'urethra/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'urethra/stones'\">Kamenci</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/bladder.svg\">\r\n                    <div class=\"title bladder\">Mjehur</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/inflammation'\">Upala</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'bladder/stones'\">Kamenci</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/prostate.svg\">\r\n                    <div class=\"title prostate\">Prostata</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'prostate/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'prostate/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'prostate/inflammation'\">Upala</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'prostate/enlargement'\">Benigno povećanje</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"flex\">\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/testis.svg\">\r\n                    <div class=\"title testis\">Testis</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/general'\">Građa i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/inflammation'\">Upala</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/hydrocele'\">Hidrokela i spermatokela</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/varicocele'\">Varikokela</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/torsion'\">Torzija testisa</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'testis/infertility'\">Neplodnost</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/penis.svg\">\r\n                    <div class=\"title penis\">Penis</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <li>\r\n                                <a [routerLink]=\"'penis/general'\">Anatomija i funkcija</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'penis/cancer'\">Karcinom</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'penis/phimosis'\">Fimoza</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'penis/frenulum'\">Frenulum breve</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'penis/induratio'\">Induratio penis plastica</a>\r\n                            </li>\r\n                            <li>\r\n                                <a [routerLink]=\"'penis/disfunction'\">Spolna nemoć</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <div>\r\n                    <img svg src=\"assets/icons/urethra.svg\">\r\n                    <div class=\"title ureter\">Mokraćna cijev</div>\r\n                    <div class=\"submenu\">\r\n                        <ul>\r\n                            <ul>\r\n                                <li>\r\n                                    <a [routerLink]=\"'ureter/general'\">Građa i funkcija</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"'ureter/cancer'\">Karcinom</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"'ureter/inflammation'\">Upala</a>\r\n                                </li>\r\n                                <li>\r\n                                    <a [routerLink]=\"'ureter/constriction'\">Suženje</a>\r\n                                </li>\r\n                            </ul>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"secondary\">\r\n    <div>\r\n        <div class=\"section-title\">\r\n            O stranici\r\n        </div>\r\n        Ova stranica je napravljena s ciljem informiranju opće populacije, ali i ljudi koji imaju veze s medicinskom\r\n        strukom, odnosno urologijom ili su njezin dio.\r\n        <br><br>\r\n        <b>\r\n            Na stranici su zastupljeni svi urološki organi počevši od:\r\n        </b>\r\n        <ul>\r\n            <li>\r\n                bubrega, mokraćovoda, mokraćnog mjehura, prostate, testisa, penisa, mokraćne cijevi.\r\n            </li>\r\n        </ul>\r\n        <b>\r\n            Svakom od gore navedenih organa kratko je opisana građa i funkcija, a nakon toga su detaljno opisane\r\n            različite\r\n            bolesti u prvom redu:\r\n        </b>\r\n        <ul>\r\n            <li>\r\n                karcinom, upala, kamenci, ali i druge bolesti, ovisno o samom organu.\r\n            </li>\r\n        </ul>\r\n        <b>\r\n            Opis bolesti podijeljen je u:\r\n        </b>\r\n        <ul>\r\n            <li>\r\n                etiologiju, kliničku sliku i simptomatologiju, dijagnostiku i obradu, liječenje i praćenje bolesti,\r\n                odnosno\r\n                bolesnika, na kraju svakog opisa je i zaključak.\r\n            </li>\r\n        </ul>\r\n        - također je navedeno <b>tko od liječnika</b> (urolog, radiolog, onkolog) pregledava bolesnika, obavlja traženu\r\n        pretragu, odnosno zahvat ili liječenje i gdje se ono obavlja.\r\n        <br>\r\n        <br>\r\n        - svaki od opisa ima dio <b>pitanja i odgovori</b> (<span style=\"color: #da4626; font-weight: bold;\">PiO</span>) koji je posvećen najčešćim pitanjima i odgovorima koje\r\n        bi\r\n        korisnici stranica mogli imati vezano uz prevenciju, dijagnostiku, liječenje i prognozu navedenih\r\n        uroloških\r\n        bolesti.\r\n        <br>\r\n        <br>\r\n    </div>\r\n</section>\r\n\r\n<section>\r\n    <div>\r\n        <div class=\"section-title\">\r\n            O autoru stranice\r\n        </div>\r\n        - autor stranice je profesionalac, koji se urologijom bavi više od 20 godina i koji se trudio da\r\n        tekstovi budu što točniji, prihvatljivi i jasniji u prvom redu općoj populaciji, mada to nije uvijek\r\n        bilo jednostavno.\r\n        <br>\r\n        <br>\r\n        - ovom stranicom nisu obuhvaćene sve urološke bolesti nego one koje su među najvažnijim i najčešćim ili\r\n        ih je barem autor stranica takvim smatrao.\r\n        <br>\r\n        <br>\r\n        - stranica je napravljena u dobroj namjeri i ona služi za informiranje, a ne za dijagnostiku i liječenje\r\n        uroloških bolesti što spada u domenu urologa.\r\n        <br>\r\n        <br>\r\n        - korištenjem stanice pristajete na uvjete korištenja.\r\n        <br>\r\n        <br>\r\n        - stranicu koristite na vlastitu odgovornost.\r\n        <br>\r\n        <br>\r\n    </div>\r\n</section>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    // pageUrl example: 'kidneys/cancer'
    getPage(pageUrl) {
        return this.http.get(`assets/html/${pageUrl}.html`, { responseType: 'text' });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ApiService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/landing/landing.component */ "./src/app/pages/landing/landing.component.ts");




const routes = [
    {
        path: '',
        component: _pages_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["Landing"],
    },
    {
        path: 'kidney',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./pages/kidney/kidney.module */ "./src/app/pages/kidney/kidney.module.ts")).then(m => m.KidneyModule)
    },
    {
        path: 'urethra',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-urethra-urethra-module */ "pages-urethra-urethra-module").then(__webpack_require__.bind(null, /*! ./pages/urethra/urethra.module */ "./src/app/pages/urethra/urethra.module.ts")).then(m => m.UrethraModule)
    },
    {
        path: 'bladder',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-bladder-bladder-module */ "pages-bladder-bladder-module").then(__webpack_require__.bind(null, /*! ./pages/bladder/bladder.module */ "./src/app/pages/bladder/bladder.module.ts")).then(m => m.BladderModule)
    },
    {
        path: 'prostate',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-prostate-prostate-module */ "pages-prostate-prostate-module").then(__webpack_require__.bind(null, /*! ./pages/prostate/prostate.module */ "./src/app/pages/prostate/prostate.module.ts")).then(m => m.ProstateModule)
    },
    {
        path: 'testis',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-testis-testis-module */ "pages-testis-testis-module").then(__webpack_require__.bind(null, /*! ./pages/testis/testis.module */ "./src/app/pages/testis/testis.module.ts")).then(m => m.TestisModule)
    },
    {
        path: 'penis',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-penis-penis-module */ "pages-penis-penis-module").then(__webpack_require__.bind(null, /*! ./pages/penis/penis.module */ "./src/app/pages/penis/penis.module.ts")).then(m => m.PenisModule)
    },
    {
        path: 'ureter',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-ureter-ureter-module */ "pages-ureter-ureter-module").then(__webpack_require__.bind(null, /*! ./pages/ureter/ureter.module */ "./src/app/pages/ureter/ureter.module.ts")).then(m => m.UreterModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parallax-section {\n  opacity: 1;\n  position: relative;\n  -webkit-transition: margin-top 0.35s ease-in-out;\n  transition: margin-top 0.35s ease-in-out;\n  width: 100%;\n  background-position: 50% 0;\n  height: 400px;\n  background-image: url('landing_bg.jpg');\n  background-size: cover;\n  background-attachment: fixed;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n  margin-bottom: 16px;\n  -webkit-transition: height 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), opacity 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: height 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), opacity 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n}\n.parallax-section.subpage {\n  height: 0px;\n  opacity: 0;\n}\n.main-title {\n  position: absolute;\n  top: 240px;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #ffffff;\n  font-weight: 900;\n  text-shadow: 0px 0px 5px #000000;\n  -webkit-transition: top 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), font-size 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), font-size 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  font-size: 16px;\n}\n.main-title.subpage {\n  font-size: 24px;\n  top: 24px;\n}\n@media screen and (min-width: 384px) {\n  .main-title {\n    font-size: 24px;\n  }\n}\n@media screen and (min-width: 540px) {\n  .main-title {\n    font-size: 40px;\n  }\n}\n@media screen and (min-width: 960px) {\n  .main-title {\n    font-size: 64px;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .main-title {\n    font-size: 72px;\n  }\n}\n.wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n}\n.wrapper header,\n.wrapper footer {\n  width: 100%;\n  min-height: 48px;\n  font-size: 13px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  background-color: #121212;\n  text-align: center;\n  line-height: 48px;\n}\n.wrapper .content {\n  background-color: #242428;\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFx0aGVtZS5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQ1FXO0VEUFgsbUJBQUE7RUFDQSxpSEFBQTtFQUFBLHlHQUFBO0FFREY7QUZHRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FFREo7QUZLQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSx3Q0FBQTtVQUFBLGdDQUFBO0VBQ0EsY0NwQmM7RURxQmQsZ0JBQUE7RUFDQSxnQ0NyQlk7RURzQlosZ0hBQUE7RUFBQSx3R0FBQTtFQUtBLGVDdEJhO0FDZ0JmO0FGRUU7RUFDRSxlQ3BCVztFRHFCWCxTQUFBO0FFQUo7QUZHRTtFQWRGO0lBZUksZUN6Qlc7RUN5QmI7QUFDRjtBRkNFO0VBakJGO0lBa0JJLGVDN0JXO0VDK0JiO0FBQ0Y7QUZERTtFQXBCRjtJQXFCSSxlQ2pDVztFQ3FDYjtBQUNGO0FGSEU7RUF2QkY7SUF3QkksZUNyQ1k7RUMyQ2Q7QUFDRjtBRkhBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUVNRjtBRkxFOztFQUVFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJDekRZO0VEMERaLGtCQUFBO0VBQ0EsaUJBQUE7QUVPSjtBRkpFO0VBQ0UseUJDakVXO0VEbUVYLG1CQUFBO1VBQUEsY0FBQTtBRUtKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3RoZW1lLnNjc3NcIjtcclxuXHJcbi5wYXJhbGxheC1zZWN0aW9uIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4tdG9wIDAuMzVzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAwO1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nX2JnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIG9wYWNpdHkgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcblxyXG4gICYuc3VicGFnZSB7XHJcbiAgICBoZWlnaHQ6IDBweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi10aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjQwcHg7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGNvbG9yOiAkY29sb3ItdHh0LXByaTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRleHQtc2hhZG93OiAkdGV4dC1zaGFkb3c7XHJcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBmb250LXNpemUgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbiAgJi5zdWJwYWdlIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1tZDtcclxuICAgIHRvcDogMjRweDtcclxuICB9XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLW5tO1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4NHB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbWQ7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XHJcbiAgICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXh4bDtcclxuICB9XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgaGVhZGVyLFxyXG4gIGZvb3RlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWJhcnM7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNDhweDtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZy1wcmk7XHJcbiAgICAvLyBTdHJldGNoIHRoZSBjb250ZW50IHNvIHRoYXQgcGFnZSBhbHdheXMgZmlsbHMgdGhlIHNjcmVlbjpcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCJcclxuLy8gQmFja2dyb3VuZHM6XHJcbiRjb2xvci1iZy1wcmk6ICMyNDI0Mjg7XHJcbiRjb2xvci1iZy1zZWM6ICMyOTJjMzM7XHJcbiRjb2xvci1iZy1iYXJzOiAjMTIxMjEyO1xyXG5cclxuLy8gVGV4dDpcclxuJGNvbG9yLXR4dC1wcmk6ICNmZmZmZmY7XHJcbiR0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDtcclxuJGZvbnQtc2l6ZS14eGw6IDcycHg7XHJcbiRmb250LXNpemUteGw6IDY0cHg7XHJcbiRmb250LXNpemUtbGc6IDQwcHg7XHJcbiRmb250LXNpemUtbWQ6IDI0cHg7XHJcbiRmb250LXNpemUtbm06IDE2cHg7XHJcbiRmb250LXNpemUtc206IDEycHg7XHJcblxyXG4vLyBNaXNjZWxsYW5ldXM6XHJcbiRjb2xvci1obDogIzEwNjNjZjtcclxuJGNvbG9yLWhsLXNlYzogI2RhNDYyNjtcclxuJGNvbG9yLWZsYXQ6ICNiY2JjYmM7XHJcbiRib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYigwIDAgMCAvIDgwJSk7XHJcblxyXG4vLyBMYXlvdXQ6XHJcbiRwYWRkaW5nLXN0ZDogNDBweDtcclxuIiwiLnBhcmFsbGF4LXNlY3Rpb24ge1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IG1hcmdpbi10b3AgMC4zNXMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2ltYWdlcy9sYW5kaW5nX2JnLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIHRyYW5zaXRpb246IGhlaWdodCAwLjVzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgb3BhY2l0eSAwLjVzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcbn1cbi5wYXJhbGxheC1zZWN0aW9uLnN1YnBhZ2Uge1xuICBoZWlnaHQ6IDBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm1haW4tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA1cHggIzAwMDAwMDtcbiAgdHJhbnNpdGlvbjogdG9wIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBmb250LXNpemUgMC41cyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5tYWluLXRpdGxlLnN1YnBhZ2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHRvcDogMjRweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM4NHB4KSB7XG4gIC5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XG4gIC5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5tYWluLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA3MnB4O1xuICB9XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59XG4ud3JhcHBlciBoZWFkZXIsXG4ud3JhcHBlciBmb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG59XG4ud3JhcHBlciAuY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNDI0Mjg7XG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.subpage = false;
        this.title = 'urology';
        router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                $('.faq-content').scrollTop(0);
                if (event.url != "/") {
                    this.subpage = true;
                }
                else {
                    this.subpage = false;
                }
            }
        });
        let self = this;
        window.onscroll = function () { self.windowScrolled(); };
    }
    windowScrolled() {
        var btn = $('#btnScrollToTop');
        if ($(window).scrollTop() > 400) {
            $('#btnScrollToTop').addClass('displayed');
        }
        else {
            $('#btnScrollToTop').removeClass('displayed');
        }
    }
    scrollToTop() {
        $('html, body').stop().animate({ scrollTop: 0 }, 250, 'swing', function () { });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_landing_landing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/landing/landing.module */ "./src/app/pages/landing/landing.module.ts");
/* harmony import */ var _pages_kidney_kidney_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/kidney/kidney.module */ "./src/app/pages/kidney/kidney.module.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");









let AppModule = class AppModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




let FaqComponent = class FaqComponent {
    constructor(http) {
        this.http = http;
        this.faqCategory = null;
        this.faqSubcategory = null;
        this.html = '';
        this.displayed = false;
        this.ngOnChanges();
    }
    toggleFaq() {
        this.displayed = !this.displayed;
        if (this.displayed) {
            $('body').addClass('no-scroll');
        }
        else {
            $('body').removeClass('no-scroll');
        }
    }
    ngOnChanges() {
        if (!this.faqCategory) {
            return;
        }
        this.http.get(`assets/html/${this.faqCategory}_faq.html`, { responseType: 'text' }).subscribe((response) => {
            this.html = response.toString();
        }, (error) => {
            this.html = null;
            this.displayed = false;
        });
        let self = this;
        $(window).on('click', function (event) {
            let target = $(event.target);
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
    }
};
FaqComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
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



/***/ }),

/***/ "./src/app/components/faq/faq.scss":
/*!*****************************************!*\
  !*** ./src/app/components/faq/faq.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faq-wrapper {\n  position: fixed;\n  left: calc(100% - 0px);\n  top: 0px;\n  height: 100vh;\n  position: fixed;\n  display: inline-block;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n  -webkit-transition: -webkit-transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: -webkit-transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1), -webkit-transform 0.5s cubic-bezier(0.67, 0.04, 0.22, 1);\n  width: calc(100vw - 40px);\n}\n.faq-wrapper.displayed {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n}\n.faq-wrapper.displayed .faq-button {\n  opacity: 1;\n}\n@media screen and (min-width: 960px) {\n  .faq-wrapper {\n    width: 80vw;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .faq-wrapper {\n    width: 70vw;\n  }\n}\n@media screen and (min-width: 1200px) {\n  .faq-wrapper {\n    width: 60vw;\n  }\n}\n@media screen and (min-width: 1600px) {\n  .faq-wrapper {\n    width: 50vw;\n  }\n}\n.faq-wrapper .faq-button {\n  position: absolute;\n  overflow: hidden;\n  opacity: 0.6;\n  cursor: pointer;\n  display: block;\n  left: -40px;\n  top: calc(50% - 24px);\n  content: \" \";\n  height: 48px;\n  width: 40px;\n  background: #da4626;\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n  line-height: 48px;\n  text-align: center;\n}\n.faq-wrapper .faq-button:hover {\n  opacity: 1;\n}\n.faq-wrapper .shine {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 100%;\n  width: 70%;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-transition: all 0.3s linear;\n  transition: all 0.3s linear;\n  -webkit-transform: skewX(20deg) translateX(0);\n          transform: skewX(20deg) translateX(0);\n}\n.faq-wrapper .faq-content {\n  position: relative;\n  left: 0px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  padding: 24px;\n  height: 100vh;\n  background: #242428;\n  border-top-right-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.8);\n  max-height: 100%;\n  overflow-y: auto;\n}\n:host::ng-deep .faq-content .list-title {\n  font-weight: bold;\n  margin-top: 48px;\n  margin-bottom: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYXEvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZhcVxcZmFxLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZmFxL0Q6XFxwcm9qZWN0c19zYW5kYm94XFx1cm9sb2d5L3NyY1xcdGhlbWUuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mYXEvZmFxLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHlDQ1dXO0VEVlgsNEVBQUE7RUFBQSxvRUFBQTtFQUFBLDREQUFBO0VBQUEsc0hBQUE7RUFVQSx5QkFBQTtBRVZGO0FGRUU7RUFDRSxvQ0FBQTtVQUFBLDRCQUFBO0FFQUo7QUZFSTtFQUNFLFVBQUE7QUVBTjtBRk1FO0VBcEJGO0lBcUJJLFdBQUE7RUVIRjtBQUNGO0FGS0U7RUF4QkY7SUF5QkksV0FBQTtFRUZGO0FBQ0Y7QUZJRTtFQTVCRjtJQTZCSSxXQUFBO0VFREY7QUFDRjtBRkdFO0VBaENGO0lBaUNJLFdBQUE7RUVBRjtBQUNGO0FGRUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJDL0JXO0VEZ0NYLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FFQUo7QUZFSTtFQUNFLFVBQUE7QUVBTjtBRklFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsNkNBQUE7VUFBQSxxQ0FBQTtBRUZKO0FGS0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRUhKO0FGU0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUVOTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZmFxL2ZhcS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lLnNjc3NcIjtcclxuXHJcbi5mYXEtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IGNhbGMoMTAwJSAtIDBweCk7XHJcbiAgdG9wOiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcclxuXHJcbiAgJi5kaXNwbGF5ZWQge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuXHJcbiAgICAuZmFxLWJ1dHRvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCkge1xyXG4gICAgd2lkdGg6IDgwdnc7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIHdpZHRoOiA3MHZ3O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICB3aWR0aDogNjB2dztcclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgfVxyXG5cclxuICAuZmFxLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAtNDBweDtcclxuICAgIHRvcDogY2FsYyg1MCUgLSAyNHB4KTtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItaGwtc2VjO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2hpbmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGxpbmVhcjtcclxuICAgIHRyYW5zZm9ybTogc2tld1goMjBkZWcpIHRyYW5zbGF0ZVgoMCk7XHJcbiAgfVxyXG5cclxuICAuZmFxLWNvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICMyNDI0Mjg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2IoMCAwIDAgLyA4MCUpO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcCB7XHJcbiAgLmZhcS1jb250ZW50IHtcclxuICAgIC5saXN0LXRpdGxlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiXHJcbi8vIEJhY2tncm91bmRzOlxyXG4kY29sb3ItYmctcHJpOiAjMjQyNDI4O1xyXG4kY29sb3ItYmctc2VjOiAjMjkyYzMzO1xyXG4kY29sb3ItYmctYmFyczogIzEyMTIxMjtcclxuXHJcbi8vIFRleHQ6XHJcbiRjb2xvci10eHQtcHJpOiAjZmZmZmZmO1xyXG4kdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XHJcbiRmb250LXNpemUteHhsOiA3MnB4O1xyXG4kZm9udC1zaXplLXhsOiA2NHB4O1xyXG4kZm9udC1zaXplLWxnOiA0MHB4O1xyXG4kZm9udC1zaXplLW1kOiAyNHB4O1xyXG4kZm9udC1zaXplLW5tOiAxNnB4O1xyXG4kZm9udC1zaXplLXNtOiAxMnB4O1xyXG5cclxuLy8gTWlzY2VsbGFuZXVzOlxyXG4kY29sb3ItaGw6ICMxMDYzY2Y7XHJcbiRjb2xvci1obC1zZWM6ICNkYTQ2MjY7XHJcbiRjb2xvci1mbGF0OiAjYmNiY2JjO1xyXG4kYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2IoMCAwIDAgLyA4MCUpO1xyXG5cclxuLy8gTGF5b3V0OlxyXG4kcGFkZGluZy1zdGQ6IDQwcHg7XHJcbiIsIi5mYXEtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogY2FsYygxMDAlIC0gMHB4KTtcbiAgdG9wOiAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xufVxuLmZhcS13cmFwcGVyLmRpc3BsYXllZCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG59XG4uZmFxLXdyYXBwZXIuZGlzcGxheWVkIC5mYXEtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk2MHB4KSB7XG4gIC5mYXEtd3JhcHBlciB7XG4gICAgd2lkdGg6IDgwdnc7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuZmFxLXdyYXBwZXIge1xuICAgIHdpZHRoOiA3MHZ3O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmZhcS13cmFwcGVyIHtcbiAgICB3aWR0aDogNjB2dztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5mYXEtd3JhcHBlciB7XG4gICAgd2lkdGg6IDUwdnc7XG4gIH1cbn1cbi5mYXEtd3JhcHBlciAuZmFxLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiAtNDBweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDI0cHgpO1xuICBjb250ZW50OiBcIiBcIjtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDBweDtcbiAgYmFja2dyb3VuZDogI2RhNDYyNjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmFxLXdyYXBwZXIgLmZhcS1idXR0b246aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmZhcS13cmFwcGVyIC5zaGluZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XG4gIHRyYW5zZm9ybTogc2tld1goMjBkZWcpIHRyYW5zbGF0ZVgoMCk7XG59XG4uZmFxLXdyYXBwZXIgLmZhcS1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMyNDI0Mjg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG46aG9zdDo6bmctZGVlcCAuZmFxLWNvbnRlbnQgLmxpc3QtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

// ./app/shared/hidden.directive.ts

// Directive decorator
let SvgDirective = 
// Directive class
class SvgDirective {
    constructor(el, renderer) {
        window.setTimeout(function () {
            let $img = jQuery(el.nativeElement);
            let imgID = $img.attr('id');
            let imgClass = $img.attr('class');
            let imgURL = $img.attr('src');
            jQuery.get(imgURL, function (data) {
                // Get the SVG tag, ignore the rest
                let $svg = jQuery(data).find('svg');
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
};
SvgDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
SvgDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[svg]' })
    // Directive class
], SvgDirective);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/seo.service */ "./src/app/seo.service.ts");





let Kidney = class Kidney {
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
Kidney.ctorParameters = () => [
    { type: src_app_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_seo_service__WEBPACK_IMPORTED_MODULE_4__["SEOService"] }
];
Kidney = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kidney',
        template: __webpack_require__(/*! raw-loader!./kidney.html */ "./node_modules/raw-loader/index.js!./src/app/pages/kidney/kidney.html"),
        styles: [__webpack_require__(/*! ./kidney.scss */ "./src/app/pages/kidney/kidney.scss")]
    })
], Kidney);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _kidney_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kidney.component */ "./src/app/pages/kidney/kidney.component.ts");
/* harmony import */ var _kidney_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kidney.routing */ "./src/app/pages/kidney/kidney.routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");







let KidneyModule = class KidneyModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kidney_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kidney.component */ "./src/app/pages/kidney/kidney.component.ts");
/* harmony import */ var src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/section.metadata */ "./src/app/section.metadata.ts");





const routes = [
    {
        path: '',
        component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"],
        children: [
            { path: 'general', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].kidney.general },
            { path: 'cancer', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].kidney.cancer },
            { path: 'inflammation', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].kidney.inflammation },
            { path: 'stones', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].kidney.stones },
            { path: 'cists', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].kidney.cists },
            { path: 'transplant', component: _kidney_component__WEBPACK_IMPORTED_MODULE_3__["Kidney"], data: src_app_section_metadata__WEBPACK_IMPORTED_MODULE_4__["SectionsMetadata"].kidney.transplant },
        ],
    },
];
let KidneyRoutingModule = class KidneyRoutingModule {
};
KidneyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], KidneyRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);




let Landing = class Landing {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.createParallax();
    }
    createParallax() {
        jquery__WEBPACK_IMPORTED_MODULE_3__('.parallax-section').each(function () {
            var $el = jquery__WEBPACK_IMPORTED_MODULE_3__(this);
            jquery__WEBPACK_IMPORTED_MODULE_3__(window).on('scroll', function () {
                updateBackground($el);
            });
            updateBackground($el);
        });
        function updateBackground($el) {
            const speed = 0.4;
            const diff = jquery__WEBPACK_IMPORTED_MODULE_3__(window).scrollTop() - $el.offset().top;
            const yPos = -(diff * speed);
            const coords = '50% ' + yPos + 'px';
            $el.css({
                backgroundPosition: coords
            });
        }
    }
    navigate(route) {
        let self = this;
        jquery__WEBPACK_IMPORTED_MODULE_3__('html, body').stop().animate({ scrollTop: 0 }, 250, 'swing', function () {
            self.router.navigateByUrl(route);
        });
    }
};
Landing.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Landing = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'landing',
        template: __webpack_require__(/*! raw-loader!./landing.html */ "./node_modules/raw-loader/index.js!./src/app/pages/landing/landing.html"),
        styles: [__webpack_require__(/*! ./landing.scss */ "./src/app/pages/landing/landing.scss")]
    })
], Landing);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.component */ "./src/app/pages/landing/landing.component.ts");
/* harmony import */ var src_app_directives_svg_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/svg.directive */ "./src/app/directives/svg.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let LandingModule = class LandingModule {
};
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



/***/ }),

/***/ "./src/app/pages/landing/landing.scss":
/*!********************************************!*\
  !*** ./src/app/pages/landing/landing.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon-list {\n  margin: 40px;\n}\n\n:host::ng-deep .icon-list svg {\n  width: 72px;\n  height: 72px;\n  top: 24px;\n  left: 64px;\n  position: absolute;\n  /*transform: translate(-75%, -50%);*/\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n}\n\n:host::ng-deep .icon-list .flex > div > div:hover svg {\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), height 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  width: 16px;\n  height: 16px;\n  top: 16px;\n  left: 16px;\n}\n\n:host::ng-deep .icon-list .flex > div > div:hover svg path {\n  /*stroke: $color-hl-sec;\n  fill: $color-hl-sec;*/\n}\n\n:host::ng-deep .icon-list .flex > div > div:hover svg .circle {\n  fill: #da4626 !important;\n}\n\n.icon-list .title {\n  text-align: center;\n  position: absolute;\n  top: 128px;\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n}\n\n.title.kidney {\n  left: 66px;\n}\n\n.title.ureter {\n  left: 29px;\n}\n\n.title.urethra {\n  left: 41px;\n}\n\n.title.bladder {\n  left: 60px;\n}\n\n.title.prostate {\n  left: 60px;\n}\n\n.title.testis {\n  left: 75px;\n}\n\n.title.penis {\n  left: 77px;\n}\n\n.icon-list ul li:hover {\n  color: #1063cf;\n}\n\n.icon-list .flex > div > div:hover .title {\n  -webkit-transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: top 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), left 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1), width 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  top: 15px;\n  left: 40px;\n  color: #da4626;\n}\n\n.icon-list ul {\n  opacity: 0;\n  padding: 0px;\n  text-align: left;\n  margin-top: 24px;\n  -webkit-transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  width: 160px;\n  overflow: visible;\n  margin-left: 18px;\n  line-height: 125%;\n  list-style-type: none;\n}\n\n.icon-list ul li {\n  padding: 0px;\n  font-size: 12px;\n  overflow: visible;\n}\n\n.icon-list .flex > div > div:hover ul {\n  opacity: 1;\n  -webkit-transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  transition: opacity 0.35s 0.3s cubic-bezier(0.67, 0.04, 0.22, 1);\n  -webkit-transition-delay: 0.5s;\n          transition-delay: 0.5s;\n}\n\n.flex {\n  max-width: 1024px;\n  margin-bottom: 40px;\n  margin-bottom: 32px !important;\n  margin: 0 auto;\n  text-transform: uppercase;\n}\n\n.flex > div {\n  position: relative;\n  display: inline-block;\n  width: 25%;\n  vertical-align: middle;\n}\n\n@media screen and (max-width: 960px) {\n  .flex > div {\n    width: 50%;\n  }\n}\n\n@media screen and (max-width: 540px) {\n  .flex > div {\n    width: 100%;\n  }\n}\n\n.flex > div > div {\n  position: relative;\n  margin: 0 auto;\n  width: 200px;\n  height: 200px;\n  padding-top: 20px;\n  /* border: 1px solid #444; */\n  /*box-shadow: 0px 0px 15px rgb(0 0 0 / 50%);*/\n  border-radius: 12px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZGluZy9EOlxccHJvamVjdHNfc2FuZGJveFxcdXJvbG9neS9zcmNcXGFwcFxccGFnZXNcXGxhbmRpbmdcXGxhbmRpbmcuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvRDpcXHByb2plY3RzX3NhbmRib3hcXHVyb2xvZ3kvc3JjXFx0aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGOztBRE1FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnT0FBQTtFQUFBLHdOQUFBO0FDSEo7O0FETUU7RUFDRSxnT0FBQTtFQUFBLHdOQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0xKOztBRE9JO0VBQ0U7dUJBQUE7QUNKTjs7QURPSTtFQUNFLHdCQUFBO0FDTE47O0FEVUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLDJLQUFBO0VBQUEsbUtBQUE7QUNQRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLFVBQUE7QUNSRjs7QURXQTtFQUNFLGNBQUE7QUNSRjs7QURXQTtFQUNFLDJLQUFBO0VBQUEsbUtBQUE7RUFFQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNFL0RhO0FEc0RmOztBRFlBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0VBQUE7RUFBQSxnRUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtFQUNBLGVFckZhO0VGc0ZiLGlCQUFBO0FDVEY7O0FEWUE7RUFDRSxVQUFBO0VBQ0Esd0VBQUE7RUFBQSxnRUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNURjs7QURZQTtFQUlFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ1pGOztBRGFFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ1hKOztBRGFJO0VBTkY7SUFPTSxVQUFBO0VDVk47QUFDRjs7QURXSTtFQVRGO0lBVU0sV0FBQTtFQ1JOO0FBQ0Y7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1JSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZGluZy9sYW5kaW5nLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUuc2Nzc1wiO1xyXG5cclxuLmljb24tbGlzdCB7XHJcbiAgbWFyZ2luOiA0MHB4O1xyXG59XHJcblxyXG5cclxuOmhvc3Q6Om5nLWRlZXAge1xyXG4gIC5pY29uLWxpc3Qgc3ZnIHtcclxuICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgbGVmdDogNjRweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgICAgXHJcbiAgICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUsIC01MCUpOyovXHJcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIGxlZnQgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksXHJcbiAgICAgIHdpZHRoIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBoZWlnaHQgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbiAgfVxyXG4gIC5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgc3ZnIHtcclxuICAgIHRyYW5zaXRpb246IHRvcCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgbGVmdCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSxcclxuICAgICAgd2lkdGggMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIGhlaWdodCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgbGVmdDogMTZweDtcclxuXHJcbiAgICBwYXRoIHtcclxuICAgICAgLypzdHJva2U6ICRjb2xvci1obC1zZWM7XHJcbiAgICAgIGZpbGw6ICRjb2xvci1obC1zZWM7Ki9cclxuICAgIH1cclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBmaWxsOiAkY29sb3ItaGwtc2VjICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaWNvbi1saXN0IC50aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyOHB4O1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgbGVmdCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSxcclxuICAgIHdpZHRoIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xyXG59XHJcblxyXG4udGl0bGUua2lkbmV5IHtcclxuICBsZWZ0OiA2NnB4O1xyXG59XHJcblxyXG4udGl0bGUudXJldGVyIHtcclxuICBsZWZ0OiAyOXB4O1xyXG59XHJcblxyXG4udGl0bGUudXJldGhyYSB7XHJcbiAgbGVmdDogNDFweDtcclxufVxyXG5cclxuLnRpdGxlLmJsYWRkZXIge1xyXG4gIGxlZnQ6IDYwcHg7XHJcbn1cclxuXHJcbi50aXRsZS5wcm9zdGF0ZSB7XHJcbiAgbGVmdDogNjBweDtcclxufVxyXG5cclxuLnRpdGxlLnRlc3RpcyB7XHJcbiAgbGVmdDogNzVweDtcclxufVxyXG5cclxuLnRpdGxlLnBlbmlzIHtcclxuICBsZWZ0OiA3N3B4O1xyXG59XHJcblxyXG4uaWNvbi1saXN0IHVsIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzEwNjNjZjtcclxufVxyXG5cclxuLmljb24tbGlzdCAuZmxleCA+IGRpdiA+IGRpdjpob3ZlciAudGl0bGUge1xyXG4gIHRyYW5zaXRpb246IHRvcCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgbGVmdCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSxcclxuICAgIHdpZHRoIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xyXG4gIHRvcDogMTVweDtcclxuICBsZWZ0OiA0MHB4O1xyXG4gIGNvbG9yOiAkY29sb3ItaGwtc2VjO1xyXG59XHJcblxyXG4uaWNvbi1saXN0IHVsIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEyNSU7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uaWNvbi1saXN0IHVsIGxpIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uaWNvbi1saXN0IC5mbGV4ID4gZGl2ID4gZGl2OmhvdmVyIHVsIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIC8vZGlzcGxheTogZmxleDtcclxuICAvL2ZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4ICFpbXBvcnRhbnQ7ICBcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gID4gZGl2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAjNDQ0OyAqL1xyXG4gICAgICAgIC8qYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IHJnYigwIDAgMCAvIDUwJSk7Ki9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4iLCIuaWNvbi1saXN0IHtcbiAgbWFyZ2luOiA0MHB4O1xufVxuXG46aG9zdDo6bmctZGVlcCAuaWNvbi1saXN0IHN2ZyB7XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDcycHg7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogNjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvKnRyYW5zZm9ybTogdHJhbnNsYXRlKC03NSUsIC01MCUpOyovXG4gIHRyYW5zaXRpb246IHRvcCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgbGVmdCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgd2lkdGggMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSksIGhlaWdodCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcbn1cbjpob3N0OjpuZy1kZWVwIC5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgc3ZnIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCB3aWR0aCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgaGVpZ2h0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICB0b3A6IDE2cHg7XG4gIGxlZnQ6IDE2cHg7XG59XG46aG9zdDo6bmctZGVlcCAuaWNvbi1saXN0IC5mbGV4ID4gZGl2ID4gZGl2OmhvdmVyIHN2ZyBwYXRoIHtcbiAgLypzdHJva2U6ICRjb2xvci1obC1zZWM7XG4gIGZpbGw6ICRjb2xvci1obC1zZWM7Ki9cbn1cbjpob3N0OjpuZy1kZWVwIC5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgc3ZnIC5jaXJjbGUge1xuICBmaWxsOiAjZGE0NjI2ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLWxpc3QgLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTI4cHg7XG4gIHRyYW5zaXRpb246IHRvcCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgbGVmdCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKSwgd2lkdGggMC4zNXMgMC4zcyBjdWJpYy1iZXppZXIoMC42NywgMC4wNCwgMC4yMiwgMSk7XG59XG5cbi50aXRsZS5raWRuZXkge1xuICBsZWZ0OiA2NnB4O1xufVxuXG4udGl0bGUudXJldGVyIHtcbiAgbGVmdDogMjlweDtcbn1cblxuLnRpdGxlLnVyZXRocmEge1xuICBsZWZ0OiA0MXB4O1xufVxuXG4udGl0bGUuYmxhZGRlciB7XG4gIGxlZnQ6IDYwcHg7XG59XG5cbi50aXRsZS5wcm9zdGF0ZSB7XG4gIGxlZnQ6IDYwcHg7XG59XG5cbi50aXRsZS50ZXN0aXMge1xuICBsZWZ0OiA3NXB4O1xufVxuXG4udGl0bGUucGVuaXMge1xuICBsZWZ0OiA3N3B4O1xufVxuXG4uaWNvbi1saXN0IHVsIGxpOmhvdmVyIHtcbiAgY29sb3I6ICMxMDYzY2Y7XG59XG5cbi5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgLnRpdGxlIHtcbiAgdHJhbnNpdGlvbjogdG9wIDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCBsZWZ0IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpLCB3aWR0aCAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiA0MHB4O1xuICBjb2xvcjogI2RhNDYyNjtcbn1cblxuLmljb24tbGlzdCB1bCB7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjM1cyAwLjNzIGN1YmljLWJlemllcigwLjY3LCAwLjA0LCAwLjIyLCAxKTtcbiAgd2lkdGg6IDE2MHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjUlO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5pY29uLWxpc3QgdWwgbGkge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5pY29uLWxpc3QgLmZsZXggPiBkaXYgPiBkaXY6aG92ZXIgdWwge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzIDAuM3MgY3ViaWMtYmV6aWVyKDAuNjcsIDAuMDQsIDAuMjIsIDEpO1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xufVxuXG4uZmxleCB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZsZXggPiBkaXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1JTtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XG4gIC5mbGV4ID4gZGl2IHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDBweCkge1xuICAuZmxleCA+IGRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5mbGV4ID4gZGl2ID4gZGl2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgLyogYm9yZGVyOiAxcHggc29saWQgIzQ0NDsgKi9cbiAgLypib3gtc2hhZG93OiAwcHggMHB4IDE1cHggcmdiKDAgMCAwIC8gNTAlKTsqL1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiXHJcbi8vIEJhY2tncm91bmRzOlxyXG4kY29sb3ItYmctcHJpOiAjMjQyNDI4O1xyXG4kY29sb3ItYmctc2VjOiAjMjkyYzMzO1xyXG4kY29sb3ItYmctYmFyczogIzEyMTIxMjtcclxuXHJcbi8vIFRleHQ6XHJcbiRjb2xvci10eHQtcHJpOiAjZmZmZmZmO1xyXG4kdGV4dC1zaGFkb3c6IDBweCAwcHggNXB4ICMwMDAwMDA7XHJcbiRmb250LXNpemUteHhsOiA3MnB4O1xyXG4kZm9udC1zaXplLXhsOiA2NHB4O1xyXG4kZm9udC1zaXplLWxnOiA0MHB4O1xyXG4kZm9udC1zaXplLW1kOiAyNHB4O1xyXG4kZm9udC1zaXplLW5tOiAxNnB4O1xyXG4kZm9udC1zaXplLXNtOiAxMnB4O1xyXG5cclxuLy8gTWlzY2VsbGFuZXVzOlxyXG4kY29sb3ItaGw6ICMxMDYzY2Y7XHJcbiRjb2xvci1obC1zZWM6ICNkYTQ2MjY7XHJcbiRjb2xvci1mbGF0OiAjYmNiY2JjO1xyXG4kYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2IoMCAwIDAgLyA4MCUpO1xyXG5cclxuLy8gTGF5b3V0OlxyXG4kcGFkZGluZy1zdGQ6IDQwcHg7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/section.metadata.ts":
/*!*************************************!*\
  !*** ./src/app/section.metadata.ts ***!
  \*************************************/
/*! exports provided: SectionsMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsMetadata", function() { return SectionsMetadata; });
const SectionsMetadata = {
    kidney: {
        general: {
            title: 'Bubreg općenito, anatomija i fiziologija',
            description: 'Anatomija i fiziologija bubrega, gdje se nalaze bubrezi, funkcija bubrega'
        },
        cancer: {
            title: 'Rak bubrega',
            description: 'Rak bubrega (karcinom ili tumor bubrega), dijagnostika i liječenje raka bubrega. Ultrazvuk bubrega, magnetska rezonanca bubrega, scintigrafija kostiju.'
        },
        inflammation: {
            title: 'Upala bubrega, pijelonefritis',
            description: 'Kronična i akutna upala bubrega, simptomi upale bubrega, pijelonefritis. Bol u bubrezima, učestalo mokrenje, bolno i otežano mokenje, krv u mokraći.'
        },
        stones: {
            title: 'Bubrežni kamenac, nefrolitijaza',
            description: 'Kamenac u bubregu, kamenac u mokraćnim kanalima. Simptomi, dijagnostika i liječenje bubrežnih kamenaca. Liječenje bubrežnog kamenca, PNS, JJ proteza, ESWL.'
        },
        cists: {
            title: 'Ciste bubrega, cistična bolest bubrega',
            description: 'Simtomi, dijagnostika i liječenje cista bubrega, kompjuterizirana tomografija bubrega, bol zbog ciste bubrega. Punkcija i operacija ciste bubrega.'
        },
        transplant: {
            title: 'Transplantacija bubrega',
            description: 'Transplantacija bubrega, donor i primatelj bubrega. Imunosupresija i lijekovi nakon transplantacije bubrega.',
        }
    },
    urethra: {
        general: {
            title: 'Mokraćovod, ureter',
            description: 'Anatomija i funkcija mokraćovoda (uretera).'
        },
        cancer: {
            title: 'Rak mokraćovoda',
            description: 'Simtomi i dijagnostika, urografija, cistoskopija, ureterorenoskopija, retrogradna ureterografija. Liječenje - operacija, zračenje, lijekovi.'
        },
        stones: {
            title: 'Kamenci bubrega i mokraćovoda (uretera)',
            description: 'Kamenci u mokraćnim kanalima, kamenci u mokraćovodu, kamenci u mokraći u bubregu i mokraćovodu. Liječenje - aktivno, ESWL, laser, PCNL, operacije. '
        }
    },
    bladder: {
        general: {
            title: 'Anatomija i funkcija mokraćnog mjehura',
            description: 'Mokraćni mjehur, anatomija i funkcija mokraćnog sustava, građa mokraćnog mjehura i mokraćnog sustava.'
        },
        cancer: {
            title: 'Rak mokraćnog mjehura',
            description: 'Karcinom mokraćnog mjehura kod žena i muškaraca, simtomi i dijagnoza raka mokraćnog mjehura, krvu u mokraći (hematurija), liječenje raka mokraćnog mjehura.'
        },
        inflammation: {
            title: 'Upala mokraćnog mjehura (Cystitis)',
            description: 'Upala mokraćnog mjehura ili cistitis, simptomi akutnog i rekurentnog cistitisa, dijagnoza i liječenje cistitisa.'
        },
        stones: {
            title: 'Kamenci mokraćnog mjehura',
            description: 'Simptomi kamenca mokraćnog mjehura - krv u mokraći, bolno mokrenje. Cistoskopija, UZV i CT mokraćnog mjehura, kultura urina, urin sediment. Liječenje - ESWL, laser, operacija.'
        },
    },
    prostate: {
        general: {
            title: 'Anatomija i fiziologija prostate',
            description: 'Građa i funkcija prostate, prostata specifični antigen (PSA).'
        },
        cancer: {
            title: 'Rak prostate, karcinom prostate',
            description: 'Rak i metastaza raka prostate, simptomi i dijagnostika (MR, PET-CT, UZV, biopsija, scintigrafija). Liječenje - operacija, lijekovi, zračenje, praćenje.'
        },
        inflammation: {
            title: 'Upala prostate (prostatitis)',
            description: 'Akutni i kronični prostatitis, sindrom kronične zdjelične boli, simptomi, dijagnostika i liječenje - antibiotici, fitoterapija.'
        },
        enlargement: {
            title: 'Benigno povećanje prostate (benigna hipertrofija prostate)',
            description: 'Simtomi i dijagnostika benignog povećanja prostate (BHP), problemi s mokrenjem, slab mlaz, otežano mokrenje. Liječenje operacijom, lijekovima i kateterom.'
        },
    },
    testis: {
        general: {
            title: 'Anatomija i fiziologija testisa',
            description: 'Testisi su spolne žlijezde koje proizvode spermije. Oni također proizvode i muški spolni hormon testosteron, koji je važan za normalno funkcioniranje muškarca.'
        },
        cancer: {
            title: 'Rak ili karcinom testisa',
            description: 'Simptomi tumora testisa, krvržica na testisu. Dijagnostika - ultrazvuk, tumorski markeri, AFP, betaHCG. Liječenje operacijom, zračenjem i lijekovima.'
        },
        inflammation: {
            title: 'Upala testisa i epididimisa (Orchiepididymitis)',
            description: 'Akutna i kronična upala testisa. Simptomi i dijagnostika upale testisa - color doppler, kultura sjemena, kultura urina, pregled testisa. Liječenje upale testisa.'
        },
        hydrocele: {
            title: 'Hidrokela/spermatokela',
            description: 'Simptomi hidrokele - oticanje testisa i skrotuma. Dijagnostika i liječenje - otvorena operacija i punkcija hidrokele/spermatokele.'
        },
        varicocele: {
            title: 'Varikokela (Varicocelle)',
            description: 'Simptomi su proširene vene testisa ili skrotuma. Dijagnoza - color doppler i ultrazvuk testisa. Liječenje operacijom po Polomo-Robbu.'
        },
        torsion: {
            title: 'Torzija (uvrtanje) testisa',
            description: 'Hitno stanje gdje dolazi do okretanja testisa. Simptom je nagla bol testisa/mošnje. Liječi se odvrtanjem ili odstranjenjem testisa ako je previše oštećen.'
        },
        infertility: {
            title: 'Muška neplodnost',
            description: 'Muška neplodnost je nemogućnost oplodnje jajne stanice. Dijagnosticira se pregledom - color doppler i ultrazvuk testisa, spermiogram, mikrobiološka analiza sjemena...'
        },
    },
    penis: {
        general: {
            title: 'Anatomija i funkcija penisa',
            description: 'Penis se sastoji od kavernoznih tkiva koja se ispune krvlju kada je penis u erekciji te glavića (glansa) i mokraćne cijevi (uretre) kroz koju mokrimo.'
        },
        cancer: {
            title: 'Rak penisa',
            description: 'Karcinom, odnosno rak penisa je rijetka bolest. Bolest obično počinje kao bezbolno zadebljanje ili otvrdnuće na penisu. Liječi se operacijom i lijekovima.'
        },
        phimosis: {
            title: 'Fimoza',
            description: 'Fimoza je suženje kože glavića (glansa) penisa. Liječi se operacijom - cirkumcizijom tj. uklanjanjem dijela kože koji je sužen.'
        },
        frenulum: {
            title: 'Kratki frenulum (frenulum breve)',
            description: 'Frenulum breve, odnosno kratki frenulum je skraćenje komadića kože na donjem dijelu glavića penisa koje kod erekcije zateže glavić penisa prema dolje.'
        },
        induratio: {
            title: 'Induratio penis plastica (Mb. Peyroni)',
            description: 'Bolesnici koji pate od ovog poremećaja se žale na iskrivljenost penisa, otvrdnuća na penisu te na bolove i probleme s potencijom, odnosno spolnim odnosom.'
        },
        disfunction: {
            title: 'Spolna nemoć (impotencija ili erektilna disfunkcija tj. ED)',
            description: 'Spolna nemoć, odnosno impotencija ili erektilna disfunkcija (ED) je naziv za nedovoljnu ukrućenost penisa za normalan spolni odnos. Liječi se lijekovima, injekcijama ili oepracijom.'
        },
    },
    ureter: {
        general: {
            title: 'Anatomija i fiziologija mokraćne cijevi (uretre)',
            description: 'Mokraćna cijev (uretra) je cijev koja počinje u mokraćnom mjehuru i kod muškaraca završava na vrhu penisa ili iznad rodnice. Kroz nju mokraća iz mokraćnog mjehura izlazi van.'
        },
        cancer: {
            title: 'Karcinom (rak) mokraćne cijevi',
            description: 'Uglavnom se javlja kod muškaraca u starijoj životnoj dobi. Simptomi su otežano i bolno mokrenje, uzak mlaz urina, krv u urinu i zadebljanja na penisu.'
        },
        inflammation: {
            title: 'Upala mokraćne cijevi (uretre)',
            description: 'Uretritis je upala mokraćne cijevi (uretre). Upala može biti akutna ili kronična. Bolesnici najčešće imaju akutnu upalu mokraćne cijevi (akutni uretritis).'
        },
        constriction: {
            title: 'Suženje (striktura) mokraćne cijevi',
            description: 'Seženje mokraćne cijevi može uzrokovati otežano, bolno i isprekidano mokrenje. Dijagnosticira se uroflowom, analizom mokraće, uretrocistoskopijom i uretrografijom.'
        }
    }
};


/***/ }),

/***/ "./src/app/seo.service.ts":
/*!********************************!*\
  !*** ./src/app/seo.service.ts ***!
  \********************************/
/*! exports provided: SEOService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEOService", function() { return SEOService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let SEOService = class SEOService {
    constructor(dom, titleSvc, metaSvc) {
        this.dom = dom;
        this.titleSvc = titleSvc;
        this.metaSvc = metaSvc;
    }
    updateTitle(title) {
        this.titleSvc.setTitle(title);
    }
    updateDescription(content) {
        this.metaSvc.updateTag({ name: 'description', content });
    }
    createCanonicalLink(url) {
        let link = this.dom.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.setAttribute('href', url);
        this.dom.head.appendChild(link);
    }
};
SEOService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Meta"] }
];
SEOService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]))
], SEOService);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_faq_faq_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/faq/faq.component */ "./src/app/components/faq/faq.component.ts");




let SharedModule = class SharedModule {
};
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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map