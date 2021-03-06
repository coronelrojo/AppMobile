(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>landing</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/shapes.svg\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>Welcome to Ionic 4 Auth</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <p>Starting point for Ionic 4 Application with Authentication.</p>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"full\" color=\"primary\" (click)=\"login()\">Login</ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button color=\"primary\" expand=\"full\" color=\"danger\" (click)=\"register()\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/landing/landing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageRoutingModule", function() { return LandingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");




const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]
    }
];
let LandingPageRoutingModule = class LandingPageRoutingModule {
};
LandingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LandingPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-routing.module */ "./src/app/pages/landing/landing-routing.module.ts");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing.page */ "./src/app/pages/landing/landing.page.ts");
/* harmony import */ var _auth_login_login_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../auth/login/login.module */ "./src/app/pages/auth/login/login.module.ts");
/* harmony import */ var _auth_register_register_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth/register/register.module */ "./src/app/pages/auth/register/register.module.ts");










const routes = [
    {
        path: "",
        component: _landing_page__WEBPACK_IMPORTED_MODULE_7__["LandingPage"],
    },
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _auth_login_login_module__WEBPACK_IMPORTED_MODULE_8__["LoginPageModule"],
            _auth_register_register_module__WEBPACK_IMPORTED_MODULE_9__["RegisterPageModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_6__["LandingPageRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_7__["LandingPage"]],
        entryComponents: [],
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/pages/landing/landing.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/landing/landing.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xhbmRpbmcvbGFuZGluZy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/landing/landing.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/landing/landing.page.ts ***!
  \***********************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/register/register.page */ "./src/app/pages/auth/register/register.page.ts");
/* harmony import */ var _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/login/login.page */ "./src/app/pages/auth/login/login.page.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");






let LandingPage = class LandingPage {
    constructor(modalController, menu, authService, navCtrl) {
        this.modalController = modalController;
        this.menu = menu;
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.menu.enable(false);
    }
    ionViewWillEnter() {
        this.authService.getToken().then(() => {
            if (this.authService.isLoggedIn) {
                this.navCtrl.navigateRoot("/dashboard");
            }
        });
    }
    ngOnInit() { }
    register() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const registerModal = yield this.modalController.create({
                component: _auth_register_register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"],
            });
            return yield registerModal.present();
        });
    }
    login() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loginModal = yield this.modalController.create({
                component: _auth_login_login_page__WEBPACK_IMPORTED_MODULE_4__["LoginPage"],
            });
            return yield loginModal.present();
        });
    }
};
LandingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-landing",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/landing/landing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.page.scss */ "./src/app/pages/landing/landing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=pages-landing-landing-module-es2015.js.map