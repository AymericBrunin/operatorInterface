webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/Dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".initialButtons{\r\n    height:150px;\r\n    width: 100%;\r\n    margin:0px;\r\n    padding : 0px 15px;\r\n}\r\n\r\n.row {\r\n    width:100%;\r\n    margin:0px;\r\n}\r\n.container-fluid{\r\n    padding: 0px;\r\n}\r\n\r\n#emdenLeerLogo { \r\n    max-width: 100%;\r\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.jumbotron{\r\n    padding: 2rem 0rem;\r\n    background-color: white;\r\n}\r\n\r\n.jumboContainer{\r\n    text-align: center;\r\n}\r\n.navbar{\r\n    height:65px;\r\n    color: white;\r\n}\r\n.imageContainer{\r\n    margin-bottom:30px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse bg-inverse\">\r\n    <p style=\"margin-bottom:0px;margin-top:5px;\">Operator Interface</p>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n        </div>\r\n        <div class=\"jumbotron jumbotron-fluid col-lg-4\">\r\n            <div class=\"container jumboContainer\">\r\n                <h1 class=\"display-4\">Welcome!</h1>\r\n                <p class=\"lead\">Select one of the devices below to see the orders</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row initialButtons\">\r\n\r\n        <div class=\"col-lg-3\"></div>\r\n\r\n\r\n        <div class=\"col-lg-2\">\r\n            <ngbd-modal-component title=\"Laser Engraver\"></ngbd-modal-component>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-lg-2\"></div>\r\n\r\n        <div class=\"col-lg-2\">\r\n            <ngbd-modal-component title=\"3D Printer\"></ngbd-modal-component>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <br>\r\n    <br>\r\n    <br>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\"></div>\r\n        <div class=\"col-lg-4 imageContainer\"><img src=\"./assets/emdenLeer.ico\" id=\"emdenLeerLogo\" /></div>\r\n        <div class=\"col-lg-4\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard-component',
        template: __webpack_require__("../../../../../src/app/Dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Dashboard/dashboard.component.css")]
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/LoginModal/modal-component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button:hover {\r\n    cursor: pointer;\r\n    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\nbutton{\r\n    height: 100%;\r\n    width:100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/LoginModal/modal-component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-outline-default\" (click)=\"open()\">{{title}}</button>"

/***/ }),

/***/ "../../../../../src/app/LoginModal/modal-content.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#submitButton{\r\n    background-color: #292b2c;\r\n    border-color: #292b2c;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/LoginModal/modal-content.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Please login with your account</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n</div>\r\n<div class=\"modal-body container-fluid\">\r\n    <form>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username: </label>\r\n            <input type=\"text\" class=\"form-control\" id=\"username\" required>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"password\">\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width:100%;margin-left:0px;margin-bottom:10px\">\r\n                <a id=\"submitButton\" routerLink=\"/showOrders/all\" class=\"btn btn-success col-sm-12\" (click)=\"activeModal.close('Close click')\">Submit</a>\r\n        </div>\r\n\r\n        <div class=\"row\" style=\"width:100%;margin-left:0px\">\r\n                <button type=\"button\" class=\"btn btn-secondary col-sm-12\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n        </div>\r\n\r\n    </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/LoginModal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return NgbdModalContent;
}());
NgbdModalContent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-content',
        template: __webpack_require__("../../../../../src/app/LoginModal/modal-content.html"),
        styles: [__webpack_require__("../../../../../src/app/LoginModal/modal-content.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], NgbdModalContent);

var NgbdModalComponent = (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
    };
    return NgbdModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], NgbdModalComponent.prototype, "title", void 0);
NgbdModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngbd-modal-component',
        template: __webpack_require__("../../../../../src/app/LoginModal/modal-component.html"),
        styles: [__webpack_require__("../../../../../src/app/LoginModal/modal-component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], NgbdModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/Order/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.apiUrl = "https://" + "139.13.79.191" + ":" + "8443" + "/DBconnection-deployment-0.0.1-SNAPSHOT/api/laserengraver/orders";
    }
    ;
    OrdersService.prototype.getOrders = function () {
        return this.http.get(this.apiUrl)
            .toPromise().then(function (response) { return JSON.parse(response.text()); }).catch(this.handleError);
    };
    OrdersService.prototype.getOrder = function (id) {
        return this.http.get(this.apiUrl + "/" + id)
            .toPromise().then(function (response) { return JSON.parse(response.text()); }).catch(this.handleError);
    };
    OrdersService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return OrdersService;
}());
OrdersService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], OrdersService);

var _a;
//# sourceMappingURL=orders.service.js.map

/***/ }),

/***/ "../../../../../src/app/OrdersShell/orders-shell.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigationButton{\r\n    text-align: center;  \r\n    max-width: 100%;\r\n}\r\n.navigationButton:hover{\r\n     cursor: pointer;\r\n}\r\n.row{\r\n    width: 100%;\r\n    margin: 0px;\r\n}\r\n.noStyleAnchor{\r\n    text-decoration: none;\r\n    color:#292b2c;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/OrdersShell/orders-shell.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"padding:0px\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin-top:10vh;\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-2 navigationButton\">\r\n            <a class=\"noStyleAnchor\" (click)=\"goToStart()\">\r\n                <i class=\"fa fa-bars fa-4x\" aria-hidden=\"true\"></i>\r\n                <h4>Menu</h4>\r\n            </a>\r\n        </div>\r\n        <div class=\"col-sm-2 navigationButton\">\r\n            <a class=\"noStyleAnchor\" routerLink=\"all\">\r\n                <i class=\"fa fa-table fa-4x\" aria-hidden=\"true\"></i>\r\n                <h4>Orders</h4>\r\n            </a>\r\n        </div>\r\n        <div class=\"col-sm-2 navigationButton\">\r\n            <a class=\"noStyleAnchor\" routerLink=\"scanner\">\r\n                <i class=\"fa fa-qrcode fa-4x\" aria-hidden=\"true\"></i>\r\n                <h4>QR Scanner</h4>\r\n            </a>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/OrdersShell/orders-shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersShellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdersShellComponent = (function () {
    function OrdersShellComponent() {
        this.visible = window.innerWidth > 750;
    }
    OrdersShellComponent.prototype.goToStart = function () {
        window.location.href = "localhost:8080/operatorInterface";
    };
    OrdersShellComponent.prototype.toggleClass = function () {
        this.visible = !this.visible;
    };
    return OrdersShellComponent;
}());
OrdersShellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "show-orders",
        template: __webpack_require__("../../../../../src/app/OrdersShell/orders-shell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/OrdersShell/orders-shell.component.css")],
    })
], OrdersShellComponent);

//# sourceMappingURL=orders-shell.component.js.map

/***/ }),

/***/ "../../../../../src/app/OrdersTable/all-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n    <div class=\"col-sm-10 tableContainer\">\r\n      <h2>All the orders for the Laser Engraver</h2>\r\n      <h5>You can find additional options below the table</h5>\r\n      <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" (scrolledDown)=\"onScrollDown()\"\r\n        (expanderClicked)=\"expanderClicked($event)\" (valueEdit)=\"editRow($event)\" [rows]=\"rows\" [columns]=\"columns\" [expandable]=\"true\"\r\n        [expandedComponent]=\"rowComponent\" [rowInputs]=\"rowInputs\">\r\n      </ng-table>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/OrdersTable/all-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Order_orders_service__ = __webpack_require__("../../../../../src/app/Order/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_content_component__ = __webpack_require__("../../../../../src/app/OrdersTable/row-content.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllOrdersComponent = (function () {
    function AllOrdersComponent(ordersService) {
        this.ordersService = ordersService;
        this.rows = [];
        this.columns = [
            { title: 'Order Number', name: 'order', filtering: { filterString: '', placeholder: 'Filter by orderID' } },
            {
                title: 'Type',
                name: 'type',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filter by type' }
            },
            { title: 'Lot', name: 'lot' },
            { title: 'Description', name: 'description' },
            { title: 'Status', name: 'status' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.rowsToRender = 35;
        this.rowComponent = __WEBPACK_IMPORTED_MODULE_2__row_content_component__["a" /* RowContentComponent */];
        this.config = {
            paging: false,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered'],
            height: '50vh',
            renderMoreAt: 0.85,
            infiniteScroll: true
        };
    }
    AllOrdersComponent.prototype.ngOnInit = function () {
        this.onChangeTable(this.config);
    };
    AllOrdersComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    AllOrdersComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    AllOrdersComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    if (item[column.name])
                        return item[column.name].toString().match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    AllOrdersComponent.prototype.onChangeTable = function (config, page) {
        var _this = this;
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        this.ordersService.getOrders().then(function (orders) {
            _this.data = orders;
            _this.length = _this.data.length;
            var filteredData = _this.changeFilter(_this.data, _this.config);
            var sortedData = _this.changeSort(filteredData, _this.config);
            _this.rows = page && config.paging ? _this.changePage(page, sortedData) : sortedData;
            _this.length = sortedData.length;
            if (sortedData.length > _this.rowsToRender && config.infiniteScroll) {
                _this.rows = sortedData.slice(0, _this.rowsToRender);
                _this.length = _this.rows.length;
            }
            else {
                _this.rows = page && config.paging ? _this.changePage(page, sortedData) : sortedData;
                _this.length = sortedData.length;
            }
        });
    };
    AllOrdersComponent.prototype.onScrollDown = function () {
        this.rowsToRender += 25;
        this.onChangeTable(this.config);
    };
    AllOrdersComponent.prototype.expanderClicked = function (row) {
        this.rowInputs = {
            wholeRow: row,
            data: this.data,
            oneOrder: false
        };
    };
    AllOrdersComponent.prototype.editRow = function (changeData) {
        console.log(changeData);
        // here you would maybe make some http request or do validation
        for (var _i = 0, changeData_1 = changeData; _i < changeData_1.length; _i++) {
            var change = changeData_1[_i];
            if (change.newValue !== "") {
                this.rows[change.rowIndex][change.columnChanged] = change.newValue;
            }
        }
    };
    AllOrdersComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    return AllOrdersComponent;
}());
AllOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'all-orders',
        template: __webpack_require__("../../../../../src/app/OrdersTable/all-orders.component.html"),
        styles: ["\n  .tableContainer{\n    text-align:center;\n    margin-top: 100px;\n  }\n    @media only screen and (max-width: 600px) {\n        .tableContainer {\n            margin-top:30px;\n        }\n    }\n"],
        providers: [__WEBPACK_IMPORTED_MODULE_1__Order_orders_service__["a" /* OrdersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Order_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Order_orders_service__["a" /* OrdersService */]) === "function" && _a || Object])
], AllOrdersComponent);

var _a;
//# sourceMappingURL=all-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/OrdersTable/one-order.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n    <div class=\"col-sm-10 tableContainer\">\r\n      <h2>All the orders for the Laser Engraver</h2>\r\n      <h5>You can find additional options below the table</h5>\r\n      <ng-table [config]=\"config\" (tableChanged)=\"onChangeTable(config)\" (cellClicked)=\"onCellClick($event)\" (scrolledDown)=\"onScrollDown()\"\r\n        (expanderClicked)=\"expanderClicked($event)\" (valueEdit)=\"editRow($event)\" [rows]=\"rows\" [columns]=\"columns\" [expandable]=\"true\"\r\n        [expandedComponent]=\"rowComponent\" [rowInputs]=\"rowInputs\">\r\n      </ng-table>\r\n    </div>\r\n    <div class=\"col-sm-1\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/OrdersTable/one-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Order_orders_service__ = __webpack_require__("../../../../../src/app/Order/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__row_content_component__ = __webpack_require__("../../../../../src/app/OrdersTable/row-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OneOrderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OneOrderComponent = (function () {
    function OneOrderComponent(ordersService, route, router) {
        var _this = this;
        this.ordersService = ordersService;
        this.route = route;
        this.router = router;
        this.rows = [];
        this.columns = [
            { title: 'Order', name: 'order', filtering: { filterString: '', placeholder: 'Filter by orderID' } },
            {
                title: 'Type',
                name: 'type',
                sort: false,
                filtering: { filterString: '', placeholder: 'Filter by type' }
            },
            { title: 'Lot', name: 'lot' },
            { title: 'Description', name: 'description' },
            { title: 'Status', name: 'status' }
        ];
        this.page = 1;
        this.itemsPerPage = 10;
        this.maxSize = 5;
        this.numPages = 1;
        this.length = 0;
        this.rowsToRender = 35;
        this.rowComponent = __WEBPACK_IMPORTED_MODULE_2__row_content_component__["a" /* RowContentComponent */];
        this.config = {
            paging: false,
            sorting: { columns: this.columns },
            filtering: { filterString: '' },
            className: ['table-striped', 'table-bordered'],
            height: '50vh',
            renderMoreAt: 0.85,
            infiniteScroll: true
        };
        this.route.params.subscribe(function (response) {
            _this.ordersService.getOrder(response['id']).then(function (orders) {
                _this.data = orders;
                _this.onChangeTable(_this.config);
            });
        });
    }
    OneOrderComponent.prototype.ngOnInit = function () {
    };
    OneOrderComponent.prototype.changePage = function (page, data) {
        if (data === void 0) { data = this.data; }
        var start = (page.page - 1) * page.itemsPerPage;
        var end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    };
    OneOrderComponent.prototype.changeSort = function (data, config) {
        if (!config.sorting) {
            return data;
        }
        var columns = this.config.sorting.columns || [];
        var columnName = void 0;
        var sort = void 0;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }
        if (!columnName) {
            return data;
        }
        // simple sorting
        return data.sort(function (previous, current) {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            }
            else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    };
    OneOrderComponent.prototype.changeFilter = function (data, config) {
        var _this = this;
        var filteredData = data;
        this.columns.forEach(function (column) {
            if (column.filtering) {
                filteredData = filteredData.filter(function (item) {
                    if (item[column.name])
                        return item[column.name].toString().match(column.filtering.filterString);
                });
            }
        });
        if (!config.filtering) {
            return filteredData;
        }
        if (config.filtering.columnName) {
            return filteredData.filter(function (item) {
                return item[config.filtering.columnName].match(_this.config.filtering.filterString);
            });
        }
        var tempArray = [];
        filteredData.forEach(function (item) {
            var flag = false;
            _this.columns.forEach(function (column) {
                if (item[column.name].toString().match(_this.config.filtering.filterString)) {
                    flag = true;
                }
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;
        return filteredData;
    };
    OneOrderComponent.prototype.onChangeTable = function (config, page) {
        if (page === void 0) { page = { page: this.page, itemsPerPage: this.itemsPerPage }; }
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }
        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }
        this.length = this.data.length;
        var filteredData = this.changeFilter(this.data, this.config);
        var sortedData = this.changeSort(filteredData, this.config);
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
        this.length = sortedData.length;
        if (sortedData.length > this.rowsToRender && config.infiniteScroll) {
            this.rows = sortedData.slice(0, this.rowsToRender);
            this.length = this.rows.length;
        }
        else {
            this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
            this.length = sortedData.length;
        }
    };
    OneOrderComponent.prototype.onScrollDown = function () {
        this.rowsToRender += 25;
        this.onChangeTable(this.config);
    };
    OneOrderComponent.prototype.expanderClicked = function (row) {
        this.rowInputs = {
            wholeRow: row,
            data: this.data,
            oneOrder: true,
        };
    };
    OneOrderComponent.prototype.editRow = function (changeData) {
        console.log(changeData);
        // here you would maybe make some http request or do validation
        for (var _i = 0, changeData_1 = changeData; _i < changeData_1.length; _i++) {
            var change = changeData_1[_i];
            if (change.newValue !== "") {
                this.rows[change.rowIndex][change.columnChanged] = change.newValue;
            }
        }
    };
    OneOrderComponent.prototype.onCellClick = function (data) {
        console.log(data);
    };
    return OneOrderComponent;
}());
OneOrderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'one-order',
        template: __webpack_require__("../../../../../src/app/OrdersTable/one-order.component.html"),
        styles: ["\n  .tableContainer{\n    text-align:center;\n    margin-top: 100px;\n  }\n    @media only screen and (max-width: 600px) {\n        .tableContainer {\n            margin-top:30px;\n        }\n    }\n"],
        providers: [__WEBPACK_IMPORTED_MODULE_1__Order_orders_service__["a" /* OrdersService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Order_orders_service__["a" /* OrdersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Order_orders_service__["a" /* OrdersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _c || Object])
], OneOrderComponent);

var _a, _b, _c;
//# sourceMappingURL=one-order.component.js.map

/***/ }),

/***/ "../../../../../src/app/OrdersTable/row-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn:hover{\r\n    cursor: pointer;\r\n    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);\r\n}\r\n#additionalContent-wrapper{\r\n    width:100%;\r\n    text-align: left;\r\n    padding: 0px 50px;\r\n}\r\n#detailBr{\r\n    display: block;\r\n}\r\n\r\n.addOptionsButtons{\r\n    padding:15px;\r\n}\r\n#confirmationComponent-wrapper{\r\n    width:100%;\r\n    text-align: left;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/OrdersTable/row-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"additionalContent-wrapper\">\r\n  <br id=\"detailBr\">\r\n  <h3>Additional options</h3>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-2 addOptionsButtons\">\r\n      <button class=\"btn btn-primary\" (click)=\"download()\">Export .txt</button>\r\n    </div>\r\n    <div class=\"col-sm-2 addOptionsButtons\">\r\n      <button class=\"btn btn-primary\" (click)=\"startOrder()\">Start order</button>\r\n    </div>\r\n    <div class=\"col-sm-2 addOptionsButtons\">\r\n      <button class=\"btn btn-primary\" (click)=\"stopOrder()\">Stop order</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" id=\"confirmationComponent-wrapper\" *ngIf=\"confirmationVisible\">\r\n    <br id=\"detailBr\">\r\n    <h5>Please confirm that the order is done</h5>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2\">\r\n        <button class=\"btn btn-primary\" (click)=\"deleteOrder()\">Yes</button>\r\n      </div>\r\n      <div class=\"col-sm-2\">\r\n        <button class=\"btn btn-primary\" (click)=\"cancelDelete()\">No</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br id=\"detailBr\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/OrdersTable/row-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RowContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RowContentComponent = (function () {
    function RowContentComponent(router) {
        this.router = router;
        this.wholeRow = {};
        this.confirmationVisible = false;
    }
    RowContentComponent.prototype.download = function () {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"])(new Blob([this.wholeRow.row.description], { type: "text" }), "Gravurtext.txt");
    };
    RowContentComponent.prototype.startOrder = function () {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] == this.wholeRow.row) {
                if (this.data[i].status !== "Done")
                    this.data[i].status = "Started";
            }
        }
    };
    RowContentComponent.prototype.stopOrder = function () {
        if (this.wholeRow.row.status == "Started")
            this.confirmationVisible = true;
    };
    RowContentComponent.prototype.deleteOrder = function () {
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i] == this.wholeRow.row) {
                this.data[i].status = "Done";
            }
        }
        this.confirmationVisible = false;
        if (this.oneOrder) {
            this.router.navigate(['showOrders/scanner']);
        }
        // implement delete function for the DB itself through the orders.service
    };
    RowContentComponent.prototype.cancelDelete = function () {
        this.confirmationVisible = false;
    };
    return RowContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RowContentComponent.prototype, "wholeRow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], RowContentComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RowContentComponent.prototype, "oneOrder", void 0);
RowContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'thing',
        template: __webpack_require__("../../../../../src/app/OrdersTable/row-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/OrdersTable/row-content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object])
], RowContentComponent);

var _a;
//# sourceMappingURL=row-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/Scanner/scanner.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin-top: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Scanner/scanner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-3\">\r\n        </div>\r\n        <div class=\"col-sm-6\" style=\"text-align:center\">\r\n            <qr-scanner *ngIf=\"videoShow\" [debug]=\"true\" [canvasWidth]=\"480\" [canvasHeight]=\"360\" [mirror]=\"false\" [stopAfterScan]=\"true\" [updateTime]=\"500\"\r\n                (onRead)=\"decodedOutput($event)\">\r\n            </qr-scanner>\r\n            <h1>{{result}}</h1>\r\n        </div>\r\n         <div class=\"col-sm-3\">\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Scanner/scanner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScannerComponent = (function () {
    function ScannerComponent(router, zone) {
        var _this = this;
        this.router = router;
        this.zone = zone;
        this.result = "Waiting for an order";
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then(function (stream) {
                _this.videoStream = stream;
                _this.videoShow = true;
            }).catch(function (err) { return _this.videoShow = false; });
        }
    }
    ScannerComponent.prototype.decodedOutput = function (decoded) {
        var _this = this;
        this.videoStream.getTracks()[0].stop();
        this.zone.run(function () { return _this.router.navigate(['showOrders/', +decoded]); });
    };
    return ScannerComponent;
}());
ScannerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: "scanner",
        template: __webpack_require__("../../../../../src/app/Scanner/scanner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Scanner/scanner.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object])
], ScannerComponent);

var _a, _b;
//# sourceMappingURL=scanner.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__OrdersShell_orders_shell_component__ = __webpack_require__("../../../../../src/app/OrdersShell/orders-shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/Dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OrdersTable_all_orders_component__ = __webpack_require__("../../../../../src/app/OrdersTable/all-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Scanner_scanner_component__ = __webpack_require__("../../../../../src/app/Scanner/scanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OrdersTable_one_order_component__ = __webpack_require__("../../../../../src/app/OrdersTable/one-order.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__Dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'showOrders',
        component: __WEBPACK_IMPORTED_MODULE_2__OrdersShell_orders_shell_component__["a" /* OrdersShellComponent */],
        children: [
            {
                path: 'all',
                component: __WEBPACK_IMPORTED_MODULE_4__OrdersTable_all_orders_component__["a" /* AllOrdersComponent */]
            },
            {
                path: 'scanner',
                component: __WEBPACK_IMPORTED_MODULE_5__Scanner_scanner_component__["a" /* ScannerComponent */]
            },
            {
                path: ':id',
                component: __WEBPACK_IMPORTED_MODULE_6__OrdersTable_one_order_component__["a" /* OneOrderComponent */]
            },
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html>\n\n<head>\n</head>\n\n<body>\n\n        <router-outlet></router-outlet>\n</body>\n\n</html>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Order_orders_service__ = __webpack_require__("../../../../../src/app/Order/orders.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/Dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__OrdersShell_orders_shell_component__ = __webpack_require__("../../../../../src/app/OrdersShell/orders-shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__OrdersTable_all_orders_component__ = __webpack_require__("../../../../../src/app/OrdersTable/all-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__OrdersTable_row_content_component__ = __webpack_require__("../../../../../src/app/OrdersTable/row-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__ = __webpack_require__("../../../../angular2-fontawesome/angular2-fontawesome.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table__ = __webpack_require__("../../../../ng2-expanding-table/ng2-expanding-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_expanding_table_components_table_ng_table_row_component__ = __webpack_require__("../../../../ng2-expanding-table/components/table/ng-table-row.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_expanding_table_components_table_ng_table_row_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_expanding_table_components_table_ng_table_row_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__LoginModal_modal_component__ = __webpack_require__("../../../../../src/app/LoginModal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Scanner_scanner_component__ = __webpack_require__("../../../../../src/app/Scanner/scanner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_angular2_qrscanner_dist_src_qrscanner_component__ = __webpack_require__("../../../../angular2-qrscanner/dist/src/qrscanner.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__node_modules_angular2_qrscanner_dist_src_qrscanner_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__node_modules_angular2_qrscanner_dist_src_qrscanner_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__OrdersTable_one_order_component__ = __webpack_require__("../../../../../src/app/OrdersTable/one-order.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__OrdersTable_row_content_component__["a" /* RowContentComponent */],
            __WEBPACK_IMPORTED_MODULE_14__LoginModal_modal_component__["a" /* NgbdModalComponent */],
            __WEBPACK_IMPORTED_MODULE_14__LoginModal_modal_component__["b" /* NgbdModalContent */],
            __WEBPACK_IMPORTED_MODULE_4__Dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__OrdersShell_orders_shell_component__["a" /* OrdersShellComponent */],
            __WEBPACK_IMPORTED_MODULE_6__OrdersTable_all_orders_component__["a" /* AllOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table__["NgTableComponent"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table__["NgTableFilteringDirective"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table__["NgTablePagingDirective"],
            __WEBPACK_IMPORTED_MODULE_12_ng2_expanding_table_ng2_expanding_table__["NgTableSortingDirective"],
            __WEBPACK_IMPORTED_MODULE_13_ng2_expanding_table_components_table_ng_table_row_component__["NgTableRowComponent"],
            __WEBPACK_IMPORTED_MODULE_18__node_modules_angular2_qrscanner_dist_src_qrscanner_component__["QrScannerComponent"],
            __WEBPACK_IMPORTED_MODULE_17__Scanner_scanner_component__["a" /* ScannerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__OrdersTable_one_order_component__["a" /* OneOrderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_16__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["a" /* PaginationModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_8_ng2_bootstrap__["b" /* TabsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_fontawesome_angular2_fontawesome__["Angular2FontawesomeModule"],
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_14__LoginModal_modal_component__["b" /* NgbdModalContent */], __WEBPACK_IMPORTED_MODULE_9__OrdersTable_row_content_component__["a" /* RowContentComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__Order_orders_service__["a" /* OrdersService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map