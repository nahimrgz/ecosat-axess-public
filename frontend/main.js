(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nahim/Desktop/axes-industrial/client-show-users/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
    production: false,
    SOCKET_ENDPOINT: `http://${window.location.hostname}:3001`
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

/***/ "M5M9":
/*!********************************************************!*\
  !*** ./src/app/canvas-clock/canvas-clock.component.ts ***!
  \********************************************************/
/*! exports provided: CanvasClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasClockComponent", function() { return CanvasClockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _TDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TDate */ "NjEl");






const _c0 = ["canvas"];
class CanvasClockComponent {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.width = 400;
        this.height = 400;
    }
    ngOnInit() { }
    ngAfterViewInit() {
        const canvasEl = this.canvasRef.nativeElement;
        canvasEl.width = this.width;
        canvasEl.height = this.height;
        const radius = canvasEl.height / 2;
        const innerRadius = radius * 0.9;
        this.canvasContext = canvasEl.getContext('2d');
        this.canvasContext.translate(radius, radius);
        this.ngZone.runOutsideAngular(() => this.draw(innerRadius));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    draw(innerRadius) {
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(t => {
            this.drawFace(this.canvasContext, innerRadius);
            this.drawNumbers(this.canvasContext, innerRadius);
            this.drawTime(this.canvasContext, innerRadius);
        }))
            .subscribe();
    }
    drawFace(ctx, radius) {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
        const grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
        grad.addColorStop(0, '#333');
        grad.addColorStop(0.5, 'white');
        grad.addColorStop(1, '#333');
        ctx.strokeStyle = grad;
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
        ctx.fillStyle = '#333';
        ctx.fill();
    }
    drawNumbers(ctx, radius) {
        let ang;
        let num;
        ctx.font = radius * 0.15 + 'px arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.85);
            ctx.rotate(-ang);
            ctx.fillText(num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.85);
            ctx.rotate(-ang);
        }
    }
    drawTime(ctx, radius) {
        const { seconds, minutes, hours } = new _TDate__WEBPACK_IMPORTED_MODULE_3__["TDate"](new Date());
        const hourHand = (hours % 12) * Math.PI / 6 + minutes * Math.PI / (6 * 60) + seconds * Math.PI / (360 * 60);
        this.drawHand(ctx, hourHand, radius * 0.5, radius * 0.07);
        const minuteHand = minutes * Math.PI / 30 + seconds * Math.PI / (30 * 60);
        this.drawHand(ctx, minuteHand, radius * 0.8, radius * 0.07);
        const secondHand = seconds * Math.PI / 30;
        this.drawHand(ctx, secondHand, radius * 0.9, radius * 0.02);
    }
    drawHand(ctx, pos, length, width) {
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.moveTo(0, 0);
        ctx.rotate(pos);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-pos);
    }
}
CanvasClockComponent.ɵfac = function CanvasClockComponent_Factory(t) { return new (t || CanvasClockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
CanvasClockComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CanvasClockComponent, selectors: [["cs-canvas-clock"]], viewQuery: function CanvasClockComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    } }, inputs: { width: "width", height: "height" }, decls: 2, vars: 0, consts: [["canvas", ""]], template: function CanvasClockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", null, 0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasClockComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cs-canvas-clock',
                template: '<canvas #canvas></canvas>',
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, { canvasRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "NjEl":
/*!***************************************!*\
  !*** ./src/app/canvas-clock/TDate.ts ***!
  \***************************************/
/*! exports provided: TDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TDate", function() { return TDate; });
/**
 * Easily Destructure Date Object
 */
class TDate {
    constructor(date) {
        this.date = date;
    }
    get seconds() {
        return this.date.getSeconds();
    }
    get minutes() {
        return this.date.getMinutes();
    }
    get hours() {
        return this.date.getHours();
    }
    get month() {
        return this.date.getMonth() + 1;
    }
    get day() {
        return this.date.getDate();
    }
    get year() {
        return this.date.getFullYear();
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/typesStatus.enum */ "ddPb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_socket_io_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/socket-io.service */ "XRfs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AppComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.user.listaMensajes, " ");
} }
function AppComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.user.listaMensajes, " ");
} }
function AppComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.user.listaMensajes, " ");
} }
function AppComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.user.listaMensajes, " ");
} }
class AppComponent {
    constructor(router, socketService) {
        this.router = router;
        this.socketService = socketService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.title = 'client-show-users';
        this.user = {};
        this.dirStatus = _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"];
        this.statusAlert = _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].WAITING;
        this.isShowingUser = false;
    }
    ngOnInit() {
        this.clearUser();
        this.initTimer();
        this.subscribeToSockets();
        console.log('sdgfsdfsdf', window.location.hostname);
    }
    ngOnDestroy() {
        clearInterval(this.intervalId);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    clearUser() {
        this.statusAlert = _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].WAITING;
        this.isShowingUser = false;
        this.user = {
            imgProfileUrl: "assets/img/noPhoto.png",
            listaMensajes: 'Esperando Lectura',
            nombre: '',
            puerta: '',
            workarea: '',
            contractor: '',
            department: '',
        };
    }
    getStatusAlert(tipoAlerta) {
        switch (tipoAlerta) {
            case 1: return _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].OK;
            case 2: return _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].WARNING;
            case 3: return _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].DANGER;
            default: return _models_typesStatus_enum__WEBPACK_IMPORTED_MODULE_3__["Status"].WAITING;
        }
    }
    initTimer() {
        this.intervalId = setInterval(() => {
            this.time = new Date();
            this.date = new Date();
        }, 1000);
    }
    setUser(registroMDC) {
        if (registroMDC.nombre !== '' && !this.isShowingUser) {
            this.isShowingUser = true;
            this.statusAlert = this.getStatusAlert(registroMDC.tipoAlerta);
            this.user.imgProfileUrl = registroMDC.imgProfileUrl != null ? registroMDC.imgProfileUrl : 'assets/img/noPhoto.png';
            this.user.nombre = registroMDC.nombre;
            this.user.puerta = registroMDC.puerta;
            this.user.listaMensajes = registroMDC.listaMensajes;
            this.user.workarea = registroMDC.workarea;
            this.user.contractor = registroMDC.contractor;
            this.user.department = registroMDC.department;
            setTimeout(() => { this.clearUser(); }, 6000);
        }
    }
    subscribeToSockets() {
        this.socketService.onListenerRegistroMdc()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(resp => {
            this.setUser(resp);
            console.log(resp);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 47, vars: 19, consts: [["id", "main", 1, "container-fluid"], [1, "row", 2, "height", "100vh"], [1, "col-6"], [1, "mt-4", "d-flex", "align-items-center", "justify-content-center"], ["id", "imgProfile", 1, "col-8", "d-flex", "justify-content-center", "p-2"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "user-name", "mt-1", "d-flex", "justify-content-center"], [1, "col-11"], [1, "user"], [1, "user-name"], [1, "row"], [1, "col-12"], [1, "box-clock", "mt-3"], [1, "time", "d-flex", "justify-content-center"], [1, "date", "d-flex", "justify-content-center"], [1, "puerta"], [1, "row", "mt-5", "d-flex", "justify-content-end"], [1, "col-12", 3, "ngSwitch"], ["class", "col-12 statusWaiting d-flex align-items-center", 4, "ngSwitchCase"], ["class", " col-12 statusOK d-flex align-items-center", 4, "ngSwitchCase"], ["class", " col-12 statusWarning d-flex align-items-center", 4, "ngSwitchCase"], ["class", " col-12 statusDanger d-flex align-items-center", 4, "ngSwitchCase"], [1, "col-12", "statusWaiting", "d-flex", "align-items-center"], ["src", "assets/img/waiting.png", 1, "img-fluid", "img-message"], [1, "user-mensaje"], [1, "col-12", "statusOK", "d-flex", "align-items-center"], ["src", "assets/img/OK.png", 1, "img-fluid", "img-message"], [1, "col-12", "statusWarning", "d-flex", "align-items-center"], ["src", "assets/img/warning.png", 1, "img-fluid", "img-message"], [1, "col-12", "statusDanger", "d-flex", "align-items-center"], ["src", "assets/img/danger.png", 1, "img-fluid", "img-message"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AppComponent_div_43_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AppComponent_div_44_Template, 4, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AppComponent_div_45_Template, 4, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AppComponent_div_46_Template, 4, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.user.imgProfileUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.nombre, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 13, ctx.time, "hh:mm a"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 16, ctx.date, "fullDate"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.department, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.contractor, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.workarea, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.puerta, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.statusAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dirStatus.WAITING);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dirStatus.OK);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dirStatus.WARNING);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.dirStatus.DANGER);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["#main[_ngcontent-%COMP%] {\n    width: 100%;\n    background-image: url('backgroundMain2.jpg');\n    background-size: cover;\n    height: 100vh;\n}\n\n#imgProfile[_ngcontent-%COMP%] {\n    background-color: azure;\n    height: 70vh;\n    border-radius: 8px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.box-clock[_ngcontent-%COMP%] {\n    \n    \n    background-size: cover;\n    background-color: lightgray;\n    width: 100%;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n    \n}\n\n.time[_ngcontent-%COMP%] {\n    \n    font-size: 80px;\n    font-weight: bold;\n}\n\n.date[_ngcontent-%COMP%] {\n    \n    font-size: 45px;\n    font-weight: bold;\n}\n\n.user[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    background-color: lightgray;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.user-name[_ngcontent-%COMP%] {\n    font-size: 50px;\n    text-align: center;\n    min-height: 75px;\n}\n\n.puerta[_ngcontent-%COMP%] {\n    min-height: 75px;\n    background-color: lightgray;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.statusWaiting[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: lightgray;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.statusOK[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: green;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.statusWarning[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: yellow;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.statusDanger[_ngcontent-%COMP%] {\n    display: flex;\n    background-color: red;\n    border-radius: 20px;\n    box-shadow: 10px 10px 5px grey;\n}\n\n.user-mensaje[_ngcontent-%COMP%] {\n    text-transform: uppercase;\n    font-size: 50px;\n    text-align: center;\n    color: white;\n    width: 100%;\n    text-shadow: 2px 2px 4px #000000;\n}\n\n.img-message[_ngcontent-%COMP%] {\n    max-height: 200px;\n    margin-left: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsNENBQTREO0lBQzVELHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCOzBCQUNzQjtBQUMxQjs7QUFFQTtJQUNJO3lCQUNxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kTWFpbjIuanBnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI2ltZ1Byb2ZpbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xuICAgIGhlaWdodDogNzB2aDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBncmV5O1xufVxuXG4uYm94LWNsb2NrIHtcbiAgICAvKiBoZWlnaHQ6IDQyMHB4OyAqL1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4vLi4vYXNzZXRzL2ltZy9iZ0Nsb2NrLnBuZ1wiKTsgKi9cbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcbiAgICAvKiBwYWRkaW5nLXRvcDogNjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE3MHB4OyAqL1xufVxuXG4udGltZSB7XG4gICAgLyogbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTQwcHg7ICovXG4gICAgZm9udC1zaXplOiA4MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGF0ZSB7XG4gICAgLyogbWFyZ2luLXRvcDogNzBweDsgKi9cbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi51c2VyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcbn1cblxuLnVzZXItbmFtZSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xufVxuXG4ucHVlcnRhIHtcbiAgICBtaW4taGVpZ2h0OiA3NXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcbn1cblxuLnN0YXR1c1dhaXRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCBncmV5O1xufVxuXG4uc3RhdHVzT0sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGdyZXk7XG59XG5cbi5zdGF0dXNXYXJuaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggZ3JleTtcbn1cblxuLnN0YXR1c0RhbmdlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IGdyZXk7XG59XG5cbi51c2VyLW1lbnNhamUge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA7XG59XG5cbi5pbWctbWVzc2FnZSB7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_socket_io_service__WEBPACK_IMPORTED_MODULE_5__["SocketIoService"] }]; }, null); })();


/***/ }),

/***/ "XRfs":
/*!***********************************************!*\
  !*** ./src/app/services/socket-io.service.ts ***!
  \***********************************************/
/*! exports provided: SocketIoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketIoService", function() { return SocketIoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "jifJ");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");





class SocketIoService {
    constructor() {
        this.onListenerRegistroMdc = () => {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]((observer) => {
                this.socket.on('nuevoRegistro', (registro) => {
                    observer.next(registro);
                });
            });
        };
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SOCKET_ENDPOINT);
    }
}
SocketIoService.ɵfac = function SocketIoService_Factory(t) { return new (t || SocketIoService)(); };
SocketIoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SocketIoService, factory: SocketIoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketIoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/es-MX */ "LMmM");
/* harmony import */ var _angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _canvas_clock_canvas_clock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas-clock/canvas-clock.component */ "M5M9");




 // CLI imports router
// configures NgModule imports and exports




const routes = []; // sets up routes constant where you define your routes
Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_es_MX__WEBPACK_IMPORTED_MODULE_5___default.a, 'es-MX');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-MX' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _canvas_clock_canvas_clock_component__WEBPACK_IMPORTED_MODULE_6__["CanvasClockComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _canvas_clock_canvas_clock_component__WEBPACK_IMPORTED_MODULE_6__["CanvasClockComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
                providers: [{ provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'es-MX' }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ddPb":
/*!********************************************!*\
  !*** ./src/app/models/typesStatus.enum.ts ***!
  \********************************************/
/*! exports provided: Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Status;
(function (Status) {
    Status[Status["WAITING"] = 0] = "WAITING";
    Status[Status["OK"] = 1] = "OK";
    Status[Status["WARNING"] = 2] = "WARNING";
    Status[Status["DANGER"] = 3] = "DANGER";
})(Status || (Status = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map