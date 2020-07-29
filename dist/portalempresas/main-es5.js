function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Pages/adquirir/app-adquirir.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/Pages/adquirir/app-adquirir.component.ts ***!
    \**********************************************************/

  /*! exports provided: AdquirirComponent */

  /***/
  function srcAppPagesAdquirirAppAdquirirComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdquirirComponent", function () {
      return AdquirirComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AdquirirComponent = /*#__PURE__*/function () {
      function AdquirirComponent(router) {
        _classCallCheck(this, AdquirirComponent);

        this.router = router;
      }

      _createClass(AdquirirComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/anuncie']);
        }
      }]);

      return AdquirirComponent;
    }();

    AdquirirComponent.ɵfac = function AdquirirComponent_Factory(t) {
      return new (t || AdquirirComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AdquirirComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdquirirComponent,
      selectors: [["app-adquirir"]],
      decls: 65,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-esquerdo"], [1, "text-center"], [1, "display-4"], [1, "text-white", "text-center"], [1, "tage"], [1, "text-white"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-direito"], [1, "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "text-left"], [1, "form-group"], ["type", "text", "id", "nome", "aria-describedby", "nome", "placeholder", "Insira o nome da sua empresa", 1, "form-control"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Insira seu e-mail", 1, "form-control"], ["type", "password", "id", "senha", "aria-describedby", "senha", "placeholder", "Crie sua senha", 1, "form-control"], ["type", "password", "id", "confirmasenha", "aria-describedby", "senha", "placeholder", "Confirme sua senha", 1, "form-control"], [1, "dropdown"], ["type", "button", "id", "dropdownMenuButton", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle"], ["aria-labelledby", "dropdownMenuButton", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"], ["src", "../assets/imagens/visto.png", "alt", "cart\xE3o visa", "width", "50", "height", "40"], ["src", "../assets/imagens/mastercard.png", "alt", "cart\xE3o mastercard", "width", "50", "height", "40"], ["type", "text", "id", "numerocartao", "aria-describedby", "numerocartao", "placeholder", "N\xFAmero do cart\xE3o", 1, "form-control"], ["type", "text", "id", "datavalidade", "aria-describedby", "datavalidade", "placeholder", "Data de validade", 1, "form-control"], ["type", "text", "id", "codigoseguranca", "aria-describedby", "codigoseguranca", "placeholder", "C\xF3digo de seguran\xE7a", 1, "form-control"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-white"], ["id", "mensagemlHelp", 1, "form-text", "text-muted"]],
      template: function AdquirirComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Seja Bem Vindo! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Plataforma On-Line Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Realize seu cadastro e descubra um jeito simples e eficiente para divulgar seu neg\xF3cio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cadastre-se e tenha acesso a plataforma ;)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1 - Crie sua conta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "2 - Selecione o plano:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Dropdown button ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Another action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Something else here");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "3 - Insira os detalhes do pagamento:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdquirirComponent_Template_button_click_58_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "small", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "* Enviaremos sua senha para o seu email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.centro-direito[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5%;\n  left: 50%;\n}\n\n.centro-esquerdo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2FkcXVpcmlyL2FwcC1hZHF1aXJpci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvYWRxdWlyaXIvYXBwLWFkcXVpcmlyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvYWRxdWlyaXIvYXBwLWFkcXVpcmlyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgICB0b3A6IC0xMDBweDsgXG4gICAgXG59XG5cbi50YWdlIHtcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4uY29ycG8tbG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjNEN0MgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1waW5rIHtcbiAgICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvLWRpcmVpdG8ge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDo1JTtcbiAgICBsZWZ0OjUwJTtcbn1cblxuLmNlbnRyby1lc3F1ZXJkbyB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjMwJTtcbiAgICByaWdodDo1MCU7XG59IiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvLWRpcmVpdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNSU7XG4gIGxlZnQ6IDUwJTtcbn1cblxuLmNlbnRyby1lc3F1ZXJkbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMCU7XG4gIHJpZ2h0OiA1MCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdquirirComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-adquirir',
          templateUrl: './app-adquirir.component.html',
          styleUrls: ['./app-adquirir.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/anunciante/app-anunciante.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Pages/anunciante/app-anunciante.component.ts ***!
    \**************************************************************/

  /*! exports provided: AnuncianteComponent */

  /***/
  function srcAppPagesAnuncianteAppAnuncianteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnuncianteComponent", function () {
      return AnuncianteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AnuncianteComponent = /*#__PURE__*/function () {
      function AnuncianteComponent(router) {
        _classCallCheck(this, AnuncianteComponent);

        this.router = router;
      }

      _createClass(AnuncianteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/login']);
        }
      }]);

      return AnuncianteComponent;
    }();

    AnuncianteComponent.ɵfac = function AnuncianteComponent_Factory(t) {
      return new (t || AnuncianteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AnuncianteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnuncianteComponent,
      selectors: [["app-anunciante"]],
      decls: 0,
      vars: 0,
      template: function AnuncianteComponent_Template(rf, ctx) {},
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FudW5jaWFudGUvYXBwLWFudW5jaWFudGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnuncianteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-anunciante',
          templateUrl: './app-anunciante.component.html',
          styleUrls: ['./app-anunciante.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/anuncie/app-anuncie.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Pages/anuncie/app-anuncie.component.ts ***!
    \********************************************************/

  /*! exports provided: AnuncieComponent */

  /***/
  function srcAppPagesAnuncieAppAnuncieComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnuncieComponent", function () {
      return AnuncieComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/app-header.component */
    "./src/app/Pages/header/app-header.component.ts");
    /* harmony import */


    var _footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../footer/app-footer.component */
    "./src/app/Pages/footer/app-footer.component.ts");

    var AnuncieComponent = /*#__PURE__*/function () {
      function AnuncieComponent(router) {
        _classCallCheck(this, AnuncieComponent);

        this.router = router;
      }

      _createClass(AnuncieComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goPlanos",
        value: function goPlanos() {
          this.router.navigate(['/adquirir']);
        }
      }, {
        key: "goRepresentante",
        value: function goRepresentante() {
          this.router.navigate(['/representante']);
        }
      }]);

      return AnuncieComponent;
    }();

    AnuncieComponent.ɵfac = function AnuncieComponent_Factory(t) {
      return new (t || AnuncieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AnuncieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnuncieComponent,
      selectors: [["app-anuncie"]],
      decls: 116,
      vars: 0,
      consts: [[1, "wrapper-content"], [1, "container-fluid", "bg_img"], [1, "row", "mt-2"], [1, "col-5"], [1, "col-6"], [1, "text-center", 2, "padding-top", "10%"], [1, "text-center", "titulo", "font-weight-bold", "tag"], [1, "text-center", "titulo", "font-weight-bold", "tage"], [1, "text-center"], [1, "col-1"], [1, "container-fluid"], [1, "row"], [1, "col-sm-4"], [1, "f-300", "f-26", "border-bottom-h"], [1, "titulo-anuncio"], [1, "titulo-anuncio-laranja"], [1, "col-sm-3", "text-center", "row", "d-flex"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded", "card-tamanho", 2, "width", "18rem"], ["src", "/assets/imagens/preview.jpg", "alt", "empresa", 1, "card-img-top", "tamanho-imagem"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-link", "col-12", "text-center", "text-white", 3, "click"], ["src", "/assets/imagens/58087.jpg", "alt", "empresa", 1, "card-img-top", "tamanho-imagem"], [1, "col-sm-2"], [1, "cor-secao"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "justify-content-center", 2, "max-width", "540px", "height", "250px"], [1, "row", "no-gutters"], [1, "col-md-3"], ["src", "/assets/imagens/2303069.jpg", "alt", "...", 1, "card-img"], [1, "col-md-9"], [1, "card-title", "nomes-testemunho"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "justify-content-start", 2, "max-width", "540px", "height", "250px"]],
      template: function AnuncieComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Anuncie no Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "b", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Fa\xE7a parte desta plataforma de oportunidades e se destaque na sua regi\xE3o! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Fa\xE7a bons neg\xF3cios e melhore suas oportunidades. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Op\xE7\xF5es ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " de Planos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "PLANO AUTONOMO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Este plano \xE9 destinado a profissionais que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "n\xE3o possuem CNPJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " e que queiram divulgar seu produto ou servi\xE7o.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnuncieComponent_Template_a_click_45_listener() {
            return ctx.goRepresentante();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Adquirir Plano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h4", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "PLANO EMPRESA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Este plano \xE9 destinado a empreendedores que ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "possuem o CNPJ ativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " e que queiram divulgar seu neg\xF3cio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AnuncieComponent_Template_a_click_58_listener() {
            return ctx.goRepresentante();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Adquirir Plano");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "strong", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Quem ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Recomenda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " O Classificae trouxe mais oportunidades para o meu neg\xF3cio! Consegui destacar minha empresa e dar maior visibilidade dos meus produtos. Recomendo o Classificae para todos! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " O Classificae \xE9 uma plataforma que auxilia a divulgar meu neg\xF3cio! Espero poder melhorar minha visibilidade. Estamos apostando no crescimento e no grande potencial do Classificae. Recomendo a plataforma Classificae! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h2", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "O Classificae \xE9 uma \xF3tima oportunidade para divulgar meu neg\xF3cio! A plataforma \xE9 simples e de facil acesso, desta forma espero alcan\xE7ar novos clientes. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "app-footer");
        }
      },
      directives: [_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_app_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 99vw;\n  height: 10vh;\n  z-index: -9999;\n  top: -60px;\n}\n\n.cor-secao[_ngcontent-%COMP%] {\n  background-color: #f8f7fb !important;\n}\n\n.border-bottom-h[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DC1864;\n  display: inline-block;\n  padding-bottom: 7px;\n}\n\n.bg_img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40vh;\n  overflow: visible;\n  white-space: nowrap;\n  background-color: orange;\n  background-image: url(\"/assets/imagens/651537-POYYSP-506.jpg\");\n  background-size: cover;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.tamanho-imagem[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\n.card-tamanho[_ngcontent-%COMP%] {\n  height: 80%;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  color: #fff;\n  text-align: center;\n  text-shadow: 2px 3px #333;\n}\n\n.tag[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: chocolate;\n}\n\n.titulo-anuncio[_ngcontent-%COMP%] {\n  font-size: 20pt;\n  color: #303146;\n  text-align: center;\n}\n\n.titulo-anuncio-laranja[_ngcontent-%COMP%] {\n  font-size: 18pt;\n  color: #FEA21A !important;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  background-color: #DC1864;\n  border-radius: 40px;\n}\n\n.nomes-testemunho[_ngcontent-%COMP%] {\n  color: #DC1864;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  min-height: 100%;\n  min-width: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2FudW5jaWUvYXBwLWFudW5jaWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2FudW5jaWUvYXBwLWFudW5jaWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDhEQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsOEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2FudW5jaWUvYXBwLWFudW5jaWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1jb250ZW50IHtcbiAgICB3aWR0aDogOTl2dztcbiAgICBoZWlnaHQ6IDEwdmg7XG4gICAgei1pbmRleDogLTk5OTk7XG4gICAgdG9wOiAtNjBweDsgXG59XG5cbi5jb3Itc2VjYW8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY3ZmIgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEQzE4NjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbi5iZ19pbWcgeyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2Vucy82NTE1MzctUE9ZWVNQLTUwNi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG92ZXJmbG93LXg6aGlkZGVuO1xuICAgIG92ZXJmbG93LXk6aGlkZGVuO1xufVxuXG4udGFtYW5oby1pbWFnZW0ge1xuICAgIGhlaWdodDogNTAlO1xufVxuXG4uY2FyZC10YW1hbmhvIHtcbiAgICBoZWlnaHQ6IDgwJTtcbn1cblxuLnRpdHVsbyB7XG4gICAgZm9udC1zaXplOiAzMHB0O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDNweCAjMzMzO1xufVxuXG4udGFnIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50YWdlIHtcbiAgICBmb250LXNpemU6IDQwcHg7ICAgICAgICBcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4udGl0dWxvLWFudW5jaW8ge1xuICAgIGZvbnQtc2l6ZTogMjBwdDtcbiAgICBjb2xvcjogIzMwMzE0NjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG8tYW51bmNpby1sYXJhbmphIHtcbiAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgY29sb3I6ICNGRUEyMUEgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREMxODY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cbi5ub21lcy10ZXN0ZW11bmhvIHtcbiAgICBjb2xvcjogI0RDMTg2NDtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH0iLCIud3JhcHBlci1jb250ZW50IHtcbiAgd2lkdGg6IDk5dnc7XG4gIGhlaWdodDogMTB2aDtcbiAgei1pbmRleDogLTk5OTk7XG4gIHRvcDogLTYwcHg7XG59XG5cbi5jb3Itc2VjYW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmN2ZiICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RDMTg2NDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4uYmdfaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDB2aDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZW5zLzY1MTUzNy1QT1lZU1AtNTA2LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi50YW1hbmhvLWltYWdlbSB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uY2FyZC10YW1hbmhvIHtcbiAgaGVpZ2h0OiA4MCU7XG59XG5cbi50aXR1bG8ge1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggM3B4ICMzMzM7XG59XG5cbi50YWcge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi50YWdlIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4udGl0dWxvLWFudW5jaW8ge1xuICBmb250LXNpemU6IDIwcHQ7XG4gIGNvbG9yOiAjMzAzMTQ2O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXR1bG8tYW51bmNpby1sYXJhbmphIHtcbiAgZm9udC1zaXplOiAxOHB0O1xuICBjb2xvcjogI0ZFQTIxQSAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREMxODY0O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4ubm9tZXMtdGVzdGVtdW5obyB7XG4gIGNvbG9yOiAjREMxODY0O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnuncieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-anuncie',
          templateUrl: './app-anuncie.component.html',
          styleUrls: ['./app-anuncie.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/cadastroEmpresa/app-cadastroEmpresa.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Pages/cadastroEmpresa/app-cadastroEmpresa.component.ts ***!
    \************************************************************************/

  /*! exports provided: CadastroEmpresaComponent */

  /***/
  function srcAppPagesCadastroEmpresaAppCadastroEmpresaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroEmpresaComponent", function () {
      return CadastroEmpresaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var CadastroEmpresaComponent = /*#__PURE__*/function () {
      function CadastroEmpresaComponent(router) {
        _classCallCheck(this, CadastroEmpresaComponent);

        this.router = router;
        this.isCollapsedEmpresa = true;
        this.isCollapsedEndereco = true;
        this.isCollapsedRedeSocial = true;
        this.isCollapsedDescricao = true;
        this.isCollapsedImagem = true;
      }

      _createClass(CadastroEmpresaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/']);
        }
      }]);

      return CadastroEmpresaComponent;
    }();

    CadastroEmpresaComponent.ɵfac = function CadastroEmpresaComponent_Factory(t) {
      return new (t || CadastroEmpresaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CadastroEmpresaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CadastroEmpresaComponent,
      selectors: [["app-cadastroEmpresa"]],
      decls: 101,
      vars: 10,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-12", "d-flex", "justify-content-center", "centro"], [1, "col-sm-10", "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "text-center"], ["type", "button", "aria-controls", "CollapsedEmpresa", 1, "btn", "btn-outline-primary", "col-sm-12", 3, "click"], ["id", "CollapsedEmpresa", 3, "ngbCollapse"], [1, "form-row"], [1, "col-6"], ["type", "text", "id", "nome", "aria-describedby", "nome", "placeholder", "Qual o nome da empresa?", "readonly", "", 1, "form-control"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Qual \xE9 o e-mail", "readonly", "", 1, "form-control"], [1, "col-4"], ["type", "tel", "id", "Telefone", "aria-describedby", "Telefone", "placeholder", "Qual \xE9 o Telefone?", 1, "form-control"], ["type", "text", "id", "HorarioAtendimento", "aria-describedby", "HorarioAtendimento", "placeholder", "Dia / Hor\xE1rio de atendimento?", 1, "form-control"], ["type", "text", "id", "Site", "aria-describedby", "Site", "placeholder", "Qual \xE9 o endere\xE7o do site?", 1, "form-control"], [1, "custom-file"], ["type", "file", "id", "Logo", 1, "custom-file-input"], ["for", "Logo", 1, "custom-file-label"], [1, "custom-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["type", "text", "id", "NumeroInscricao", "aria-describedby", "NumeroInscricao", "placeholder", "Qual o n\xFAmero do cnpj ou cpf?", 1, "form-control"], ["type", "button", "aria-controls", "CollapsedEndereco", 1, "btn", "btn-outline-primary", "col-sm-12", 3, "click"], ["id", "CollapsedEndereco", 3, "ngbCollapse"], ["type", "text", "id", "Cep", "aria-describedby", "Cep", "placeholder", "Qual \xE9 o Cep?", 1, "form-control"], ["type", "text", "id", "Estado", "aria-describedby", "Estado", "placeholder", "Qual \xE9 o Estado?", 1, "form-control"], ["type", "text", "id", "Cidade", "aria-describedby", "Cidade", "placeholder", "Qual \xE9 a Cidade?", 1, "form-control"], ["type", "text", "id", "Bairro", "aria-describedby", "Bairro", "placeholder", "Qual \xE9 o Bairro?", 1, "form-control"], ["type", "text", "id", "Rua", "aria-describedby", "Rua", "placeholder", "Qual \xE9 a Rua?", 1, "form-control"], ["type", "text", "id", "Numero", "aria-describedby", "Numero", "placeholder", "Qual \xE9 o N\xFAmero?", 1, "form-control"], ["type", "button", "aria-controls", "CollapsedRedeSocial", 1, "btn", "btn-outline-primary", "col-sm-12", 3, "click"], ["id", "CollapsedRedeSocial", 3, "ngbCollapse"], ["type", "text", "id", "Facebook", "aria-describedby", "Facebook", "placeholder", "Qual \xE9 o endere\xE7o do Facebook?", 1, "form-control"], ["type", "text", "id", "WhatsApp", "aria-describedby", "WhatsApp", "placeholder", "Qual \xE9 o WhatsApp?", 1, "form-control"], ["type", "text", "id", "YouTube", "aria-describedby", "YouTube", "placeholder", "Qual \xE9 o endere\xE7o do YouTube?", 1, "form-control"], ["type", "text", "id", "Instagram", "aria-describedby", "Instagram", "placeholder", "Qual \xE9 o endere\xE7o do Instagram?", 1, "form-control"], ["type", "button", "aria-controls", "CollapsedDescricao", 1, "btn", "btn-outline-primary", "col-sm-12", 3, "click"], ["id", "CollapsedDescricao", 3, "ngbCollapse"], [1, "form-horizontal"], [1, "col-md-6"], ["rows", "3", "id", "Descricao", "aria-describedby", "Descricao", "placeholder", "Insira uma descri\xE7\xE3o resumida da empresa", "required", "", 1, "form-control"], ["rows", "3", "id", "DescricaoDetalhada", "aria-describedby", "DescricaoDetalhada", "placeholder", "Insira uma descri\xE7\xE3o detalhada da empresa", "required", "", 1, "form-control"], ["type", "button", "aria-controls", "CollapsedImagem", 1, "btn", "btn-outline-primary", "col-sm-12", 3, "click"], ["id", "CollapsedImagem", 3, "ngbCollapse"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-white"]],
      template: function CadastroEmpresaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ol\xE1, Nome do Usu\xE1rio ;)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Preencha os campos para divulgarmos o seu neg\xF3cio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroEmpresaComponent_Template_button_click_10_listener() {
            return ctx.isCollapsedEmpresa = !ctx.isCollapsedEmpresa;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Dados da Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Selecione logotipo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Empresa possui");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "CNPJ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "CPF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroEmpresaComponent_Template_button_click_44_listener() {
            return ctx.isCollapsedEndereco = !ctx.isCollapsedEndereco;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Endere\xE7o da Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroEmpresaComponent_Template_button_click_65_listener() {
            return ctx.isCollapsedRedeSocial = !ctx.isCollapsedRedeSocial;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Dados da Rede Social da Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroEmpresaComponent_Template_button_click_80_listener() {
            return ctx.isCollapsedDescricao = !ctx.isCollapsedDescricao;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Descri\xE7\xE3o da Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "textarea", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "textarea", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroEmpresaComponent_Template_button_click_90_listener() {
            return ctx.isCollapsedImagem = !ctx.isCollapsedImagem;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " Imagens do Produto da Empresa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " subir imagens ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroEmpresaComponent_Template_button_click_96_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedEmpresa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedEmpresa);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedEndereco);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedEndereco);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedRedeSocial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedRedeSocial);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedDescricao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedDescricao);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsedImagem);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsedImagem);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCollapse"]],
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.texto[_ngcontent-%COMP%] {\n  padding: 30%;\n}\n\n.centro[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2NhZGFzdHJvRW1wcmVzYS9hcHAtY2FkYXN0cm9FbXByZXNhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9QYWdlcy9jYWRhc3Ryb0VtcHJlc2EvYXBwLWNhZGFzdHJvRW1wcmVzYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvY2FkYXN0cm9FbXByZXNhL2FwcC1jYWRhc3Ryb0VtcHJlc2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICAgIHRvcDogLTEwMHB4OyBcbn1cblxuLnRhZ2Uge1xuICAgIGNvbG9yOiBjaG9jb2xhdGU7XG59XG5cbi5jb3Jwby1sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICAgIGJhY2tncm91bmQ6ICNEQzE4NjQ7XG59XG5cbi50ZXh0byB7XG4gICAgcGFkZGluZzogMzAlO1xufVxuXG4uY2VudHJvIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MTAlO1xufVxuIiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4udGV4dG8ge1xuICBwYWRkaW5nOiAzMCU7XG59XG5cbi5jZW50cm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroEmpresaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cadastroEmpresa',
          templateUrl: './app-cadastroEmpresa.component.html',
          styleUrls: ['./app-cadastroEmpresa.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/cadastroUsuario/app-cadastroUsuario.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Pages/cadastroUsuario/app-cadastroUsuario.component.ts ***!
    \************************************************************************/

  /*! exports provided: CadastroUsuarioComponent */

  /***/
  function srcAppPagesCadastroUsuarioAppCadastroUsuarioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroUsuarioComponent", function () {
      return CadastroUsuarioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CadastroUsuarioComponent = /*#__PURE__*/function () {
      function CadastroUsuarioComponent(router) {
        _classCallCheck(this, CadastroUsuarioComponent);

        this.router = router;
      }

      _createClass(CadastroUsuarioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/login']);
        }
      }]);

      return CadastroUsuarioComponent;
    }();

    CadastroUsuarioComponent.ɵfac = function CadastroUsuarioComponent_Factory(t) {
      return new (t || CadastroUsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CadastroUsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CadastroUsuarioComponent,
      selectors: [["app-cadastroUsuario"]],
      decls: 32,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center"], [1, "text-center"], [1, "display-4"], [1, "text-white", "text-center"], [1, "tage"], [1, "text-white"], [1, "col-sm-8"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "form-group"], ["type", "text", "id", "nome", "aria-describedby", "nome", "placeholder", "Insira o nome da sua empresa", 1, "form-control"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Insira seu e-mail", 1, "form-control"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-outline-info", "text-black", 3, "click"], ["type", "submit", 1, "btn", "btn-pink", "text-white"], ["id", "mensagemlHelp", 1, "form-text", "text-muted"]],
      template: function CadastroUsuarioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Seja Bem Vindo! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Plataforma On-Line Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Realize seu cadastro e descubra um jeito simples e eficiente para divulgar seu neg\xF3cio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cadastre-se e tenha acesso a plataforma ;)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroUsuarioComponent_Template_button_click_25_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Salvar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "* Enviaremos sua senha para o seu email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2NhZGFzdHJvVXN1YXJpby9hcHAtY2FkYXN0cm9Vc3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9QYWdlcy9jYWRhc3Ryb1VzdWFyaW8vYXBwLWNhZGFzdHJvVXN1YXJpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NhZGFzdHJvVXN1YXJpby9hcHAtY2FkYXN0cm9Vc3VhcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgICB0b3A6IC0xMDBweDsgXG4gICAgXG59XG5cbi50YWdlIHtcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4uY29ycG8tbG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjNEN0MgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1waW5rIHtcbiAgICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuIiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroUsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cadastroUsuario',
          templateUrl: './app-cadastroUsuario.component.html',
          styleUrls: ['./app-cadastroUsuario.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/cadastrofaturamento/app-cadastrofaturamento.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/Pages/cadastrofaturamento/app-cadastrofaturamento.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CadastroFaturamentoComponent */

  /***/
  function srcAppPagesCadastrofaturamentoAppCadastrofaturamentoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CadastroFaturamentoComponent", function () {
      return CadastroFaturamentoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CadastroFaturamentoComponent = /*#__PURE__*/function () {
      function CadastroFaturamentoComponent(router) {
        _classCallCheck(this, CadastroFaturamentoComponent);

        this.router = router;
      }

      _createClass(CadastroFaturamentoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/login']);
        }
      }]);

      return CadastroFaturamentoComponent;
    }();

    CadastroFaturamentoComponent.ɵfac = function CadastroFaturamentoComponent_Factory(t) {
      return new (t || CadastroFaturamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CadastroFaturamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CadastroFaturamentoComponent,
      selectors: [["app-cadastroFaturamento"]],
      decls: 39,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-esquerdo"], [1, "text-center"], [1, "display-4"], [1, "text-white", "text-center"], [1, "tage"], [1, "text-white"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-direito"], [1, "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "text-left"], [1, "form-group"], ["type", "text", "id", "nomeContato", "aria-describedby", "nomeContato", "placeholder", "Insira o nome para contato", 1, "form-control"], ["type", "text", "id", "nomeEmpresa", "aria-describedby", "nomeEmpresa", "placeholder", "Insira o nome da sua empresa", 1, "form-control"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Insira seu e-mail", 1, "form-control"], ["type", "email", "id", "telefone", "aria-describedby", "telefone", "placeholder", "Insira seu telefone", 1, "form-control"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-white"], ["id", "mensagemlHelp", 1, "form-text", "text-muted"]],
      template: function CadastroFaturamentoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Seja Bem Vindo! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Plataforma On-Line Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Realize seu cadastro e descubra um jeito simples e eficiente para divulgar seu neg\xF3cio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cadastre-se e tenha acesso a plataforma ;)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1 - Crie sua conta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CadastroFaturamentoComponent_Template_button_click_32_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "* Em breve entraremos em contato.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.centro[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2NhZGFzdHJvZmF0dXJhbWVudG8vYXBwLWNhZGFzdHJvRmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2NhZGFzdHJvZmF0dXJhbWVudG8vYXBwLWNhZGFzdHJvRmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2NhZGFzdHJvZmF0dXJhbWVudG8vYXBwLWNhZGFzdHJvRmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICAgIHRvcDogLTEwMHB4OyBcbiAgICBcbn1cblxuLnRhZ2Uge1xuICAgIGNvbG9yOiBjaG9jb2xhdGU7XG59XG5cbi5jb3Jwby1sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICAgIGJhY2tncm91bmQ6ICNEQzE4NjQ7XG59XG5cbi5jZW50cm8ge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoxMCU7XG59IiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CadastroFaturamentoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cadastroFaturamento',
          templateUrl: './app-cadastroFaturamento.component.html',
          styleUrls: ['./app-cadastroFaturamento.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/categoria/app-categoria.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/Pages/categoria/app-categoria.component.ts ***!
    \************************************************************/

  /*! exports provided: CategoriaComponent */

  /***/
  function srcAppPagesCategoriaAppCategoriaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function () {
      return CategoriaComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var CategoriaComponent = /*#__PURE__*/function () {
      function CategoriaComponent(router) {
        _classCallCheck(this, CategoriaComponent);

        this.router = router;
      }

      _createClass(CategoriaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CategoriaComponent;
    }();

    CategoriaComponent.ɵfac = function CategoriaComponent_Factory(t) {
      return new (t || CategoriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    CategoriaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoriaComponent,
      selectors: [["app-categoria"]],
      decls: 84,
      vars: 0,
      consts: [[1, "text-center", "cor-secao"], [1, "font-weight-bold", "titulo-categoria"], [1, "col-sm-12"], ["type", "submit", 1, "btn", "btn-outline-primary", "mr-1"], [1, "align-text-top"], [1, "col-sm-12", "mt-2"]],
      template: function CategoriaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Encontre uma empresa por categoria:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "H");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "I");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "J");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "K");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "L");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "M");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "N");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "P");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Q");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "R");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "T");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "V");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "W");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Y");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Z");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 98vw;\n  height: 10vh;\n  z-index: -9999;\n  top: -60px;\n}\n\n.cor-secao[_ngcontent-%COMP%] {\n  background-color: #F3F2F1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2NhdGVnb3JpYS9hcHAtY2F0ZWdvcmlhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9QYWdlcy9jYXRlZ29yaWEvYXBwLWNhdGVnb3JpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9jYXRlZ29yaWEvYXBwLWNhdGVnb3JpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLndyYXBwZXItY29udGVudCB7XG4gICAgd2lkdGg6IDk4dnc7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICAgIHRvcDogLTYwcHg7IFxufVxuXG4uY29yLXNlY2FvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMkYxICFpbXBvcnRhbnQ7XG59IiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiA5OHZ3O1xuICBoZWlnaHQ6IDEwdmg7XG4gIHotaW5kZXg6IC05OTk5O1xuICB0b3A6IC02MHB4O1xufVxuXG4uY29yLXNlY2FvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzRjJGMSAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoriaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-categoria',
          templateUrl: './app-categoria.component.html',
          styleUrls: ['./app-categoria.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/content/app-content.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Pages/content/app-content.component.ts ***!
    \********************************************************/

  /*! exports provided: ContentComponent */

  /***/
  function srcAppPagesContentAppContentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _header_app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../header/app-header.component */
    "./src/app/Pages/header/app-header.component.ts");

    var ContentComponent = /*#__PURE__*/function () {
      function ContentComponent(router) {
        _classCallCheck(this, ContentComponent);

        this.router = router;
      }

      _createClass(ContentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentComponent;
    }();

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["app-content"]],
      decls: 20,
      vars: 0,
      consts: [[1, "col-sm-12"], [1, "container-fluid", "bg_img", "elementos-pesquisa"], [1, "overlay"], [1, "row", "mt-2"], [1, "text-center", "titulo", "font-weight-bold"], [1, "col-sm-4"], [1, "col-sm-4", "pr-0", "nopadding"], ["type", "search", "id", "pesquisa", "placeholder", "Ol\xE1, qual empresa voc\xEA procura hoje?", 1, "form-control", "input-pesquisar", "text-center"], [1, "col-sm-3", "nopadding"], ["type", "submit", 1, "btn", "btn-pesquisar", "text-white"], [1, "material-icons", "align-text-top"], [1, "align-text-top"], [1, "col-sm-3"]],
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Encontre aqui empresas que ir\xE3o ajudar voc\xEA!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " search ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Pesquisar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_app_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
      styles: [".btn-pesquisar[_ngcontent-%COMP%] {\n  background-color: #FEA21A;\n  border-radius: 25px;\n  height: 55px;\n}\n\n.input-pesquisar[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  height: 55px;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  font-size: 30pt;\n  color: #fff;\n  text-align: center;\n  text-shadow: 2px 3px #333;\n}\n\n.titulo-categoria[_ngcontent-%COMP%] {\n  font-size: 20pt;\n  color: #fff;\n  text-align: center;\n  text-shadow: 2px 2px #333;\n  font-family: \"Crete Round\", serif !important;\n}\n\n.elementos-pesquisa[_ngcontent-%COMP%] {\n  padding: 32px 0;\n  padding-bottom: 0px;\n  padding-top: 180px;\n  padding-right: 0px;\n  padding-left: 0px;\n  position: relative;\n}\n\n.bg_img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 50vh;\n  overflow: visible;\n  white-space: nowrap;\n  background-image: url(\"/assets/imagens/shopping-center-318602_1920.jpg\");\n  background-size: cover;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  min-height: 100%;\n  min-width: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n@media screen and (max-width: 800px) {\n  .bg_img[_ngcontent-%COMP%] {\n    height: auto;\n  }\n\n  .titulo[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n\n  .input-pesquisar[_ngcontent-%COMP%] {\n    width: 90%;\n    margin: auto;\n  }\n\n  .btn-pesquisar[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: auto;\n    border-radius: 0;\n    margin-top: 4%;\n  }\n\n  .all-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .all-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .nopadding[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2NvbnRlbnQvYXBwLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhZ2VzL2NvbnRlbnQvYXBwLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURJQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0VBQUE7RUFDQSxzQkFBQTtFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7QUNGTDs7QURNQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSw4QkFBQTtBQ0hKOztBRE1BO0VBQ0k7SUFDSSxZQUFBO0VDSE47O0VES0U7SUFDSSxlQUFBO0VDRk47O0VES0U7SUFDSSxVQUFBO0lBQ0EsWUFBQTtFQ0ZOOztFREtFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGNBQUE7RUNGTjs7RURLRTtJQUNJLGtCQUFBO0VDRk47O0VESUU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtFQ0ROOztFREdFO0lBQ0kscUJBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvY29udGVudC9hcHAtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmJ0bi1wZXNxdWlzYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUEyMUE7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5pbnB1dC1wZXNxdWlzYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgaGVpZ2h0OiA1NXB4O1xufVxuXG4udGl0dWxvIHtcbiAgICBmb250LXNpemU6IDMwcHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAycHggM3B4ICMzMzM7XG4gICAgLy8gZm9udC1mYW1pbHk6ICdDcmV0ZSBSb3VuZCcsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8tY2F0ZWdvcmlhIHtcbiAgICBmb250LXNpemU6IDIwcHQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6ICdDcmV0ZSBSb3VuZCcsIHNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVtZW50b3MtcGVzcXVpc2Ege1xuICAgIHBhZGRpbmc6IDMycHggMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxODBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYmdfaW1ne1xuICAgIC8vIGZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTB2aDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlbnMvc2hvcHBpbmctY2VudGVyLTMxODYwMl8xOTIwLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgIG92ZXJmbG93LXg6aGlkZGVuO1xuICAgICBvdmVyZmxvdy15OmhpZGRlbjtcbiAgICAvLyBwb3NpdGlvbjphYnNvbHV0ZTtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuYmdfaW1nIHtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICAudGl0dWxvIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5pbnB1dC1wZXNxdWlzYXIge1xuICAgICAgICB3aWR0aDogOTAlOyAgICBcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cblxuICAgIC5idG4tcGVzcXVpc2FyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bzsgICAgICAgICAgICAgICAgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDQlO1xuICAgIH1cblxuICAgIC5hbGwtY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYWxsLTEyIHtcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLm5vcGFkZGluZyB7XG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICB9XG59IiwiLmJ0bi1wZXNxdWlzYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkVBMjFBO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi5pbnB1dC1wZXNxdWlzYXIge1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbi50aXR1bG8ge1xuICBmb250LXNpemU6IDMwcHQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtc2hhZG93OiAycHggM3B4ICMzMzM7XG59XG5cbi50aXR1bG8tY2F0ZWdvcmlhIHtcbiAgZm9udC1zaXplOiAyMHB0O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMzMzO1xuICBmb250LWZhbWlseTogXCJDcmV0ZSBSb3VuZFwiLCBzZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uZWxlbWVudG9zLXBlc3F1aXNhIHtcbiAgcGFkZGluZzogMzJweCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLXRvcDogMTgwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJnX2ltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUwdmg7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlbnMvc2hvcHBpbmctY2VudGVyLTMxODYwMl8xOTIwLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYmdfaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAudGl0dWxvIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAuaW5wdXQtcGVzcXVpc2FyIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxuXG4gIC5idG4tcGVzcXVpc2FyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbiAgfVxuXG4gIC5hbGwtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuYWxsLTEyIHtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubm9wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-content',
          templateUrl: './app-content.component.html',
          styleUrls: ['./app-content.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/faturamento/app-faturamento.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Pages/faturamento/app-faturamento.component.ts ***!
    \****************************************************************/

  /*! exports provided: FaturamentoComponent */

  /***/
  function srcAppPagesFaturamentoAppFaturamentoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaturamentoComponent", function () {
      return FaturamentoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var FaturamentoComponent = /*#__PURE__*/function () {
      function FaturamentoComponent(router) {
        _classCallCheck(this, FaturamentoComponent);

        this.router = router;
      }

      _createClass(FaturamentoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/login']);
        }
      }]);

      return FaturamentoComponent;
    }();

    FaturamentoComponent.ɵfac = function FaturamentoComponent_Factory(t) {
      return new (t || FaturamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    FaturamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaturamentoComponent,
      selectors: [["app-faturamento"]],
      decls: 95,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-12", "d-flex", "justify-content-center", "centro"], [1, "text-center"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "table", "table-hover"], ["scope", "col"], ["scope", "row"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"]],
      template: function FaturamentoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Clientes Cadastrados");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Verificar o Status para o Bloqueio de Acesso e Faturamento ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Telefone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Dt. Cadastro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Dt. Faturamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Liberar Acesso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "A\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Andreia de Oliveira dos Santos Guedes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Casa do Uniforme");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "andreia.guedes@casadouniforme.com.br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "12 99999999");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "12/01/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "12/02/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "liberado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Charles Augusto dos Santos Guedes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Tria Software");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "charles.guedes@triasoftware.com.br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "12 88888888");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "12/01/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "12/02/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Aguardando Pagamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "OK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Vitor Cabral");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Auto Pe\xE7as Boa Vista");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "vitor.cabral@boavista.com.br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "12 77777777");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "12/01/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "12/02/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Novo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "NOK");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaturamentoComponent_Template_button_click_93_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.centro[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2ZhdHVyYW1lbnRvL2FwcC1mYXR1cmFtZW50by5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvZmF0dXJhbWVudG8vYXBwLWZhdHVyYW1lbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9mYXR1cmFtZW50by9hcHAtZmF0dXJhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlci1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICAgIHRvcDogLTEwMHB4OyBcbiAgICBcbn1cblxuLnRhZ2Uge1xuICAgIGNvbG9yOiBjaG9jb2xhdGU7XG59XG5cbi5jb3Jwby1sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICAgIGJhY2tncm91bmQ6ICNEQzE4NjQ7XG59XG5cbi5jZW50cm8ge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoxMCU7XG59IiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaturamentoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-faturamento',
          templateUrl: './app-faturamento.component.html',
          styleUrls: ['./app-faturamento.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/footer/app-footer.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/Pages/footer/app-footer.component.ts ***!
    \******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPagesFooterAppFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 63,
      vars: 0,
      consts: [[1, "tamanho-section", "cor-secao"], [1, "cor-secao"], [1, "container-fluid"], [1, "row"], [1, "col-4", "mauto", "all-6"], [1, "f-300", "f-26", "border-bottom-h", "text-center"], [1, "tag", "text-white", "text-center"], [1, "tage"], [1, "text-white"], [1, "col-2", "text-center", "all-6", "mauto"], [1, "nav", "flex-column", "nopadding"], [1, "nav-item"], [1, "f-300", "f-26", "border-bottom-h", "text-center", "text-white"], ["href", "#", 1, "nav-link", "text-white"], [1, "col-2", "text-center", "all-6"], [1, "rodape"], [1, "col-12", "text-center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \xC9 uma plataforma digital que auxilia na divulga\xE7\xE3o de Empresas e seus segmentos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Informa\xE7\xE3o");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Anuncie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Planos e Pre\xE7os");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "D\xFAvidas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Legal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Termos & condi\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pol\xEDtica de privacidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Informa\xE7\xE3o sobre dereitos autoriais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Ajuda");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Suporte");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Contato");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Siga-Nos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Desenvolvido por \xA9Classificae. Todos os direitos reservados.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 99vw;\n  height: 10vh;\n  z-index: -9999;\n  top: -60px;\n}\n\n.tamanho-section[_ngcontent-%COMP%] {\n  height: 30vh;\n  padding-top: 40px;\n}\n\n.cor-secao[_ngcontent-%COMP%] {\n  background-color: #303146 !important;\n}\n\n.border-bottom-h[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DC1864;\n  display: inline-block;\n  padding-bottom: 7px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  font-size: 2-pt;\n  color: #FEA21A;\n  font-weight: bold;\n}\n\n.rodape[_ngcontent-%COMP%] {\n  background-color: #5F75F8;\n}\n\n@media screen and (max-width: 800px) {\n  .rodape[_ngcontent-%COMP%] {\n    position: relative;\n    bottom: -203px;\n  }\n\n  .all-6[_ngcontent-%COMP%] {\n    flex: 0 0 50%;\n    max-width: 50%;\n    text-align: left !important;\n  }\n\n  .mauto[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  .nopadding[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2Zvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9QYWdlcy9mb290ZXIvYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNDSjs7QURNQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksb0NBQUE7QUNISjs7QURNQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRGVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1pKOztBRGVBO0VBQ0kseUJBQUE7QUNaSjs7QURnQkE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EsY0FBQTtFQ2JOOztFRGVFO0lBQ0ksYUFBQTtJQUNBLGNBQUE7SUFDQSwyQkFBQTtFQ1pOOztFRGNFO0lBQ0ksWUFBQTtFQ1hOOztFRGFFO0lBQ0kscUJBQUE7RUNWTjs7RURZRTtJQUNJLHFCQUFBO0VDVE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL2Zvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGVudCB7XG4gICAgd2lkdGg6IDk5dnc7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHotaW5kZXg6IC05OTk5O1xuICAgIHRvcDogLTYwcHg7IFxufVxuXG4vLyAuYmctZGFyayB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMzE0NiAhaW1wb3J0YW50O1xuLy8gfVxuXG4udGFtYW5oby1zZWN0aW9uIHtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5jb3Itc2VjYW8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMxNDYgIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1ib3R0b20taCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEQzE4NjQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG59XG5cbi8vIC50aXR1bG8ge1xuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICMzMDMxNDYgIWltcG9ydGFudDtcbi8vICAgICBmb250LXNpemU6IDMwcHQ7XG4vLyAgICAgY29sb3I6ICMzMDMxNDY7XG4vLyAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuLy8gICAgIHRleHQtc2hhZG93OiAycHggMnB4ICMzMzM7XG4vLyAgICAgZm9udC1mYW1pbHk6ICdDcmV0ZSBSb3VuZCcsIHNlcmlmICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi50YWdlIHtcbiAgICBmb250LXNpemU6IDItcHQ7XG4gICAgY29sb3I6ICNGRUEyMUE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb2RhcGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Rjc1Rjg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAucm9kYXBlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3R0b206IC0yMDNweDtcbiAgICB9XG4gICAgLmFsbC02IHtcbiAgICAgICAgZmxleDogMCAwIDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm1hdXRvIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAubm9wYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubmF2LWxpbmsge1xuICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi53cmFwcGVyLWNvbnRlbnQge1xuICB3aWR0aDogOTl2dztcbiAgaGVpZ2h0OiAxMHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtNjBweDtcbn1cblxuLnRhbWFuaG8tc2VjdGlvbiB7XG4gIGhlaWdodDogMzB2aDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5jb3Itc2VjYW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzMTQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItYm90dG9tLWgge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RDMTg2NDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xufVxuXG4udGFnZSB7XG4gIGZvbnQtc2l6ZTogMi1wdDtcbiAgY29sb3I6ICNGRUEyMUE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm9kYXBlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVGNzVGODtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnJvZGFwZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogLTIwM3B4O1xuICB9XG5cbiAgLmFsbC02IHtcbiAgICBmbGV4OiAwIDAgNTAlO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5tYXV0byB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG5cbiAgLm5vcGFkZGluZyB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './app-footer.component.html',
          styleUrls: ['./app-footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/header/app-header.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/Pages/header/app-header.component.ts ***!
    \******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPagesHeaderAppHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Component app-header inciado...');
        }
      }, {
        key: "goAnuncie",
        value: function goAnuncie() {
          this.router.navigate(['/anuncie']);
        }
      }, {
        key: "goLogin",
        value: function goLogin() {
          this.router.navigate(['/login']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 24,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "header", "fixed-top"], [1, "container"], ["href", "#", 1, "navbar-brand"], [2, "padding-top", "10%"], [1, "tag-header", "text-white"], [1, "tage-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto", "font-header"], [1, "nav-item"], ["href", "#", 1, "nav-link"], [1, "sr-only"], [1, "nav-link", "text-white"], [1, "btn", "btn-primary", 3, "click"], [1, "btn", "btn-pink", "text-white", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_18_listener() {
            return ctx.goAnuncie();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Anuncie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "|");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_22_listener() {
            return ctx.goLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Acessar Conta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]],
      styles: [".header[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.font-header[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.tag-header[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.tage-header[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: chocolate;\n}\n\n.tag[_ngcontent-%COMP%] {\n  font-size: 2-pt;\n  color: #1e4ed2;\n  font-weight: bold;\n}\n\n.tage[_ngcontent-%COMP%] {\n  font-size: 2-pt;\n  color: chocolate;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2hlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9QYWdlcy9oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzRDdDICFpbXBvcnRhbnQ7XG59XG5cbi5mb250LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxOHB4OyAgXG59XG5cbi5idG4tcGluayB7XG4gICAgYmFja2dyb3VuZDogI0RDMTg2NDtcbn1cblxuLnRhZy1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRhZ2UtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDQwcHg7ICAgICAgICBcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4udGFnIHtcbiAgICBmb250LXNpemU6IDItcHQ7XG4gICAgY29sb3I6IHJnYigzMCwgNzgsIDIxMCk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50YWdlIHtcbiAgICBmb250LXNpemU6IDItcHQ7XG4gICAgY29sb3I6IGNob2NvbGF0ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuICAiLCIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1oZWFkZXIge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5idG4tcGluayB7XG4gIGJhY2tncm91bmQ6ICNEQzE4NjQ7XG59XG5cbi50YWctaGVhZGVyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4udGFnZS1oZWFkZXIge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiBjaG9jb2xhdGU7XG59XG5cbi50YWcge1xuICBmb250LXNpemU6IDItcHQ7XG4gIGNvbG9yOiAjMWU0ZWQyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRhZ2Uge1xuICBmb250LXNpemU6IDItcHQ7XG4gIGNvbG9yOiBjaG9jb2xhdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './app-header.component.html',
          styleUrls: ['./app-header.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/login/app-login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/Pages/login/app-login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginAppLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Component app-login inciado...');
        }
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/']);
        }
      }, {
        key: "goRecuperarAcesso",
        value: function goRecuperarAcesso() {
          this.router.navigate(['/recuperarAcesso']);
        }
      }, {
        key: "goCadastro",
        value: function goCadastro() {
          this.router.navigate(['/cadastroEmpresa']);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 36,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-esquerdo"], [1, "text-center"], [1, "display-4"], [1, "text-white", "text-center"], [1, "tage"], [1, "text-white"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-direito"], [1, "col-sm-8"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "form-group"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Insira seu E-mail", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], ["type", "password", "id", "senha", "placeholder", "Insira sua Senha", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", "text-center", "col-md-12", "text-white", 3, "click"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-secondary", "text-white", 3, "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Seja Bem Vindo! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " A Plataforma On-Line Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \xC9 uma maneira simples e objetiva que far\xE1 com que seus servi\xE7os ou produtos sejam divulgados e colocados em evid\xEAncia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vamos que vamos!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "* Nunca compartilharemos sua conta com mais ningu\xE9m.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_27_listener() {
            return ctx.goCadastro();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Acessar Conta");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_31_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_34_listener() {
            return ctx.goRecuperarAcesso();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Recuperar Senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.centro-direito[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n}\n\n.centro-esquerdo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL2xvZ2luL2FwcC1sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvUGFnZXMvbG9naW4vYXBwLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG9DQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBR0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0ZKOztBREtBO0VBR0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvbG9naW4vYXBwLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgICB0b3A6IC0xMDBweDsgXG4gICAgXG59XG5cbi50YWdlIHtcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4uY29ycG8tbG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjNEN0MgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1waW5rIHtcbiAgICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvLWRpcmVpdG8ge1xuICAgIC8vIHdpZHRoOjEwMHB4O1xuICAgIC8vIGhlaWdodDoxMDBweDtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6MjAlO1xuICAgIGxlZnQ6NTAlO1xufVxuXG4uY2VudHJvLWVzcXVlcmRvIHtcbiAgICAvLyB3aWR0aDoxMDBweDtcbiAgICAvLyBoZWlnaHQ6MTAwcHg7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjMwJTtcbiAgICByaWdodDo1MCU7XG59IiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgY29sb3I6IGNob2NvbGF0ZTtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvLWRpcmVpdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jZW50cm8tZXNxdWVyZG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICByaWdodDogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './app-login.component.html',
          styleUrls: ['./app-login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/recuperarAcesso/app-recuperarAcesso.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/Pages/recuperarAcesso/app-recuperarAcesso.component.ts ***!
    \************************************************************************/

  /*! exports provided: RecuperarAcessoComponent */

  /***/
  function srcAppPagesRecuperarAcessoAppRecuperarAcessoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecuperarAcessoComponent", function () {
      return RecuperarAcessoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RecuperarAcessoComponent = /*#__PURE__*/function () {
      function RecuperarAcessoComponent(router) {
        _classCallCheck(this, RecuperarAcessoComponent);

        this.router = router;
      }

      _createClass(RecuperarAcessoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('Component app-recuperarAcesso inciado...');
        }
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/login']);
        }
      }]);

      return RecuperarAcessoComponent;
    }();

    RecuperarAcessoComponent.ɵfac = function RecuperarAcessoComponent_Factory(t) {
      return new (t || RecuperarAcessoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    RecuperarAcessoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RecuperarAcessoComponent,
      selectors: [["app-recuperarAcesso"]],
      decls: 35,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-esquerdo"], [1, "text-center"], [1, "display-1"], [1, "text-white", "text-center"], [1, "text-white"], [1, "tage"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-direito"], [1, "col-sm-8"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "form-group"], ["type", "email", "id", "exampleInputEmail1", "aria-describedby", "emailHelp", "placeholder", "Insira seu E-mail", 1, "form-control"], ["id", "emailHelp", 1, "form-text", "text-muted"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-white"], [1, "col-sm-1"]],
      template: function RecuperarAcessoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Simplifique sua Vida! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Recupere seu acesso na sua Plataforma On-Line Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " e divulgue sua empresa. Milhares de pessoas est\xE3o buscando empresas como a sua :D ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ol\xE1 n\xE3o se preocupe! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Vamos recuperar seu acesso ;)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Nunca compartilharemos sua conta com mais ningu\xE9m.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RecuperarAcessoComponent_Template_button_click_26_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Enviar nova senha");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "* Enviaremos sua senha no seu email.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  font-size: 2-pt;\n  color: chocolate;\n  font-weight: bold;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.bg_img[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 0;\n  min-width: 0%;\n  min-height: 100%;\n  width: auto;\n  height: auto;\n  z-index: -1000;\n  background: url(\"/assets/imagens/1864.jpg\") no-repeat;\n  background-size: inherit;\n  background-position: center;\n}\n\n.centro-direito[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n}\n\n.centro-esquerdo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL3JlY3VwZXJhckFjZXNzby9hcHAtcmVjdXBlcmFyQWNlc3NvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9QYWdlcy9yZWN1cGVyYXJBY2Vzc28vYXBwLXJlY3VwZXJhckFjZXNzby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxvQ0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURHQTtFQUNJLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9yZWN1cGVyYXJBY2Vzc28vYXBwLXJlY3VwZXJhckFjZXNzby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDUwdmg7XG4gICAgei1pbmRleDogLTk5OTk7XG4gICAgdG9wOiAtMTAwcHg7IFxuICAgIFxufVxuXG4udGFnZSB7XG4gICAgZm9udC1zaXplOiAyLXB0O1xuICAgIGNvbG9yOiBjaG9jb2xhdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb3Jwby1sb2dpbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICAgIGJhY2tncm91bmQ6ICNEQzE4NjQ7XG59XG5cbi5iZ19pbWcge1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtaW4td2lkdGg6IDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHotaW5kZXg6IC0xMDAwO1xuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZW5zLzE4NjQuanBnJykgbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5jZW50cm8tZGlyZWl0byB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjIwJTtcbiAgICBsZWZ0OjUwJTtcbn1cblxuLmNlbnRyby1lc3F1ZXJkbyB7XG4gICAgcG9zaXRpb246YWJzb2x1dGU7XG4gICAgdG9wOjMwJTtcbiAgICByaWdodDo1MCU7XG59IiwiLndyYXBwZXItY29udGVudCB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1MHZoO1xuICB6LWluZGV4OiAtOTk5OTtcbiAgdG9wOiAtMTAwcHg7XG59XG5cbi50YWdlIHtcbiAgZm9udC1zaXplOiAyLXB0O1xuICBjb2xvcjogY2hvY29sYXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvcnBvLWxvZ2luIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QyAhaW1wb3J0YW50O1xufVxuXG4uYnRuLXBpbmsge1xuICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uYmdfaW1nIHtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWluLXdpZHRoOiAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbiAgei1pbmRleDogLTEwMDA7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2Vucy8xODY0LmpwZ1wiKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY2VudHJvLWRpcmVpdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xuICBsZWZ0OiA1MCU7XG59XG5cbi5jZW50cm8tZXNxdWVyZG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzAlO1xuICByaWdodDogNTAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecuperarAcessoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-recuperarAcesso',
          templateUrl: './app-recuperarAcesso.component.html',
          styleUrls: ['./app-recuperarAcesso.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/representante/app-representante.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/Pages/representante/app-representante.component.ts ***!
    \********************************************************************/

  /*! exports provided: RepresentanteComponent */

  /***/
  function srcAppPagesRepresentanteAppRepresentanteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RepresentanteComponent", function () {
      return RepresentanteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var RepresentanteComponent = /*#__PURE__*/function () {
      function RepresentanteComponent(router) {
        _classCallCheck(this, RepresentanteComponent);

        this.router = router;
      }

      _createClass(RepresentanteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/anuncie']);
        }
      }]);

      return RepresentanteComponent;
    }();

    RepresentanteComponent.ɵfac = function RepresentanteComponent_Factory(t) {
      return new (t || RepresentanteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    RepresentanteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RepresentanteComponent,
      selectors: [["app-representante"]],
      decls: 39,
      vars: 0,
      consts: [[1, "container-fluid", "corpo-login", 2, "position", "fixed", "height", "100%"], [1, "row"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-esquerdo"], [1, "text-center"], [1, "display-4"], [1, "text-white", "text-center"], [1, "tage"], [1, "text-white"], [1, "col-sm-6", "d-flex", "justify-content-center", "centro-direito"], [1, "col-sm-12"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded"], [1, "text-left"], [1, "form-group"], ["type", "text", "id", "nomeContato", "aria-describedby", "nomeContato", "placeholder", "Insira o nome para contato", 1, "form-control"], ["type", "text", "id", "nomeEmpresa", "aria-describedby", "nomeEmpresa", "placeholder", "Insira o nome da sua empresa", 1, "form-control"], ["type", "email", "id", "email", "aria-describedby", "email", "placeholder", "Insira seu e-mail", 1, "form-control"], ["type", "email", "id", "telefone", "aria-describedby", "telefone", "placeholder", "Insira seu telefone", 1, "form-control"], [1, "form-group", "text-right"], ["type", "submit", 1, "btn", "btn-pink", "text-white", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "text-white"], ["id", "mensagemlHelp", 1, "form-text", "text-muted"]],
      template: function RepresentanteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Seja Bem Vindo! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A Plataforma On-Line Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "b", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Realize seu cadastro e descubra um jeito simples e eficiente para divulgar seu neg\xF3cio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cadastre-se e tenha acesso a plataforma ;)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "1 - Crie sua conta:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RepresentanteComponent_Template_button_click_32_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Voltar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Cadastrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "small", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "* Em breve entraremos em contato.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 50vh;\n  z-index: -9999;\n  top: -100px;\n}\n\n.tage[_ngcontent-%COMP%] {\n  color: chocolate;\n}\n\n.corpo-login[_ngcontent-%COMP%] {\n  background-color: #563D7C !important;\n}\n\n.btn-pink[_ngcontent-%COMP%] {\n  background: #DC1864;\n}\n\n.centro-direito[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n}\n\n.centro-esquerdo[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 30%;\n  right: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL3JlcHJlc2VudGFudGUvYXBwLXJlcHJlc2VudGFudGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3JlcHJlc2VudGFudGUvYXBwLXJlcHJlc2VudGFudGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksb0NBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9yZXByZXNlbnRhbnRlL2FwcC1yZXByZXNlbnRhbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXItY29udGVudCB7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogNTB2aDtcbiAgICB6LWluZGV4OiAtOTk5OTtcbiAgICB0b3A6IC0xMDBweDsgXG4gICAgXG59XG5cbi50YWdlIHtcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG4uY29ycG8tbG9naW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NjNEN0MgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1waW5rIHtcbiAgICBiYWNrZ3JvdW5kOiAjREMxODY0O1xufVxuXG4uY2VudHJvLWRpcmVpdG8ge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDoyMCU7XG4gICAgbGVmdDo1MCU7XG59XG5cbi5jZW50cm8tZXNxdWVyZG8ge1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIHRvcDozMCU7XG4gICAgcmlnaHQ6NTAlO1xufSIsIi53cmFwcGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogNTB2aDtcbiAgei1pbmRleDogLTk5OTk7XG4gIHRvcDogLTEwMHB4O1xufVxuXG4udGFnZSB7XG4gIGNvbG9yOiBjaG9jb2xhdGU7XG59XG5cbi5jb3Jwby1sb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NjNEN0MgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1waW5rIHtcbiAgYmFja2dyb3VuZDogI0RDMTg2NDtcbn1cblxuLmNlbnRyby1kaXJlaXRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwJTtcbiAgbGVmdDogNTAlO1xufVxuXG4uY2VudHJvLWVzcXVlcmRvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IDUwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RepresentanteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-representante',
          templateUrl: './app-representante.component.html',
          styleUrls: ['./app-representante.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/section/app-section.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/Pages/section/app-section.component.ts ***!
    \********************************************************/

  /*! exports provided: SectionComponent */

  /***/
  function srcAppPagesSectionAppSectionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionComponent", function () {
      return SectionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _section_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./section.service */
    "./src/app/Pages/section/section.service.ts");
    /* harmony import */


    var _content_app_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../content/app-content.component */
    "./src/app/Pages/content/app-content.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../footer/app-footer.component */
    "./src/app/Pages/footer/app-footer.component.ts");

    function SectionComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SectionComponent_div_12_Template_li_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var item_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.goEmpresa(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Visualizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
      }
    }

    var SectionComponent = /*#__PURE__*/function () {
      function SectionComponent(router, service) {
        _classCallCheck(this, SectionComponent);

        this.router = router;
        this.service = service;
        this.listCompanys = [];
      }

      _createClass(SectionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCompanys();
        }
      }, {
        key: "goEmpresa",
        value: function goEmpresa(company) {
          localStorage.setItem('company', JSON.stringify(company));
          this.router.navigate(['/visualizar']);
        }
      }, {
        key: "getCompanys",
        value: function getCompanys() {
          var _this = this;

          this.service.companys().subscribe(function (node) {
            _this.listCompanys = node.company;
          }, function (err) {
            console.error(err);
          });
        }
      }]);

      return SectionComponent;
    }();

    SectionComponent.ɵfac = function SectionComponent_Factory(t) {
      return new (t || SectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"]));
    };

    SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SectionComponent,
      selectors: [["app-section"]],
      decls: 18,
      vars: 1,
      consts: [[1, "cor-secao"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "f-300", "f-26", "border-bottom-h"], [1, "titulo"], [1, "cor-texto"], ["class", "col-sm-3 text-center row d-flex mauto justify-content-end nopadding", 4, "ngFor", "ngForOf"], [1, "col-sm-3", "text-center", "row", "d-flex", "mauto", "justify-content-end", "nopadding"], [1, "card", "shadow-lg", "p-3", "mb-5", "bg-white", "rounded", 2, "width", "18rem"], ["src", "/assets/imagens/2303069.jpg", "alt", "empresa", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text", "text-left"], [1, "btn", "btn-link", "col-12", "text-center", "text-white", 3, "click"]],
      template: function SectionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Empresas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Encontradas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SectionComponent_div_12_Template, 10, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listCompanys);
        }
      },
      directives: [_content_app_content_component__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]],
      styles: [".wrapper-content[_ngcontent-%COMP%] {\n  width: 98vw;\n  height: 30vh;\n  z-index: -9999;\n  top: -60px;\n}\n\n.cor-secao[_ngcontent-%COMP%] {\n  background-color: #fffefe !important;\n}\n\n.cor-texto[_ngcontent-%COMP%] {\n  color: #FEA21A !important;\n}\n\n.border-bottom-h[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #DC1864;\n  display: inline-block;\n  padding-bottom: 7px;\n}\n\n.titulo[_ngcontent-%COMP%] {\n  font-size: 20pt;\n  color: #303146;\n  text-align: center;\n}\n\n.btn-link[_ngcontent-%COMP%] {\n  background-color: #DC1864;\n  border-radius: 40px;\n}\n\n@media screen and (max-width: 800px) {\n  .nopadding[_ngcontent-%COMP%] {\n    padding: 0 !important;\n  }\n\n  .mauto[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    width: 100% !important;\n    padding: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL3NlY3Rpb24vYXBwLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3NlY3Rpb24vYXBwLXNlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFFSSxvQ0FBQTtBQ0RKOztBRElBO0VBQ0kseUJBQUE7QUNESjs7QURJQTtFQUNJLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREtBO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBRE1BO0VBQ0k7SUFDSSxxQkFBQTtFQ0hOOztFREtFO0lBQ0ksWUFBQTtFQ0ZOOztFRElFO0lBQ0ksc0JBQUE7SUFDQSxxQkFBQTtFQ0ROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9QYWdlcy9zZWN0aW9uL2FwcC1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ud3JhcHBlci1jb250ZW50IHtcbiAgICB3aWR0aDogOTh2dztcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgei1pbmRleDogLTk5OTk7XG4gICAgdG9wOiAtNjBweDsgXG59ICAgICAgIFxuXG4uY29yLXNlY2FvIHtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNGMkYxICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNTQpICFpbXBvcnRhbnQ7XG4gfVxuXG4uY29yLXRleHRvIHtcbiAgICBjb2xvcjogI0ZFQTIxQSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1oIHtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0RDMTg2NDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuLnRpdHVsbyB7XG4gICAgZm9udC1zaXplOiAyMHB0O1xuICAgIGNvbG9yOiAjMzAzMTQ2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbn1cblxuLmJ0bi1saW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREMxODY0O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAubm9wYWRkaW5nIHtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubWF1dG8ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIH1cbn0iLCIud3JhcHBlci1jb250ZW50IHtcbiAgd2lkdGg6IDk4dnc7XG4gIGhlaWdodDogMzB2aDtcbiAgei1pbmRleDogLTk5OTk7XG4gIHRvcDogLTYwcHg7XG59XG5cbi5jb3Itc2VjYW8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZWZlICFpbXBvcnRhbnQ7XG59XG5cbi5jb3ItdGV4dG8ge1xuICBjb2xvcjogI0ZFQTIxQSAhaW1wb3J0YW50O1xufVxuXG4uYm9yZGVyLWJvdHRvbS1oIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNEQzE4NjQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbn1cblxuLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMjBwdDtcbiAgY29sb3I6ICMzMDMxNDY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RDMTg2NDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm5vcGFkZGluZyB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLm1hdXRvIHtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cblxuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-section',
          templateUrl: './app-section.component.html',
          styleUrls: ['./app-section.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _section_service__WEBPACK_IMPORTED_MODULE_2__["SectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/section/section.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/Pages/section/section.service.ts ***!
    \**************************************************/

  /*! exports provided: SectionService */

  /***/
  function srcAppPagesSectionSectionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SectionService", function () {
      return SectionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var SectionService = /*#__PURE__*/function () {
      function SectionService(http) {
        _classCallCheck(this, SectionService);

        this.http = http;
        this.urlApi = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url;
      }

      _createClass(SectionService, [{
        key: "companys",
        value: function companys() {
          return this.http.get(this.urlApi + 'listCompanys').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            console.error(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
          }));
        }
      }]);

      return SectionService;
    }();

    SectionService.ɵfac = function SectionService_Factory(t) {
      return new (t || SectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]));
    };

    SectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SectionService,
      factory: SectionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Pages/visualizar/app-visualizar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Pages/visualizar/app-visualizar.component.ts ***!
    \**************************************************************/

  /*! exports provided: VisualizarComponent */

  /***/
  function srcAppPagesVisualizarAppVisualizarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizarComponent", function () {
      return VisualizarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js");

    function VisualizarComponent_span_121_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" De ", item_r8.value.day_week_start, " a ", item_r8.value.day_week_end, " das ", item_r8.value.hour_start, " \xE0s ", item_r8.value.hour_end, " ");
      }
    }

    function VisualizarComponent_b_125_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisualizarComponent_b_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisualizarComponent_b_127_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisualizarComponent_span_130_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dinheiro ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisualizarComponent_span_131_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cart\xE3o de cr\xE9dito ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisualizarComponent_span_132_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cart\xE3o de d\xE9bito ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisualizarComponent_ngb_carousel_141_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r10.value.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function VisualizarComponent_ngb_carousel_141_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VisualizarComponent_ngb_carousel_141_1_ng_template_0_Template, 2, 1, "ng-template", 71);
      }
    }

    function VisualizarComponent_ngb_carousel_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisualizarComponent_ngb_carousel_141_1_Template, 1, 0, undefined, 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r7.company.images));
      }
    }

    var VisualizarComponent = /*#__PURE__*/function () {
      function VisualizarComponent(router, sanitizer) {
        _classCallCheck(this, VisualizarComponent);

        this.router = router;
        this.sanitizer = sanitizer;
        this.company = JSON.parse(localStorage.getItem('company'));
      }

      _createClass(VisualizarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goVoltar",
        value: function goVoltar() {
          this.router.navigate(['/']);
        }
      }, {
        key: "getSafeUrl",
        value: function getSafeUrl() {
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.company.address.map);
        }
      }]);

      return VisualizarComponent;
    }();

    VisualizarComponent.ɵfac = function VisualizarComponent_Factory(t) {
      return new (t || VisualizarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
    };

    VisualizarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisualizarComponent,
      selectors: [["app-visualizar"]],
      decls: 148,
      vars: 24,
      consts: [[1, "wrapper-content"], [1, "col-12", "back", "p-2"], [1, "container"], [1, "row"], [1, "voltar", "col-6", 3, "click"], [1, "fa", "fa-arrow-left"], [1, "ml-2"], [1, "col-6", "text-right"], [1, "tag-header", "text-white"], [1, "tage-header"], [1, "col-12", "img-body"], [1, "col-6", "pt-3", "all-12", "all-center"], ["src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFhMXFhgXFhcYGBgYFxoYGBUXFxUaGhcYHSggGxolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDQ0OFQ8PFSsdHR0tKy0tLS8uLi03Ny0tLS0tLS0tKy4tKy0rLS0uLS4tNy8tLS0tLS0uLTcvLS0tLS0tLf/AABEIALQAtAMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBQYEBwj/xAA9EAACAQIEBAMFBwIEBwEAAAABAgADEQQSITEFQVFhBhNxByKBkfAyQqGxwdHxFOEjcoKSFSQ0Q1KDojP/xAAaAQEBAQEBAQEAAAAAAAAAAAAAAQIDBAUG/8QAKhEBAAIBAgUBCAMAAAAAAAAAAAECEQMEBRIhMdGBQVFxkaGx4fAGFFL/2gAMAwEAAhEDEQA/APjIF4sseaOaYSDHGFiIgVmjU+snNprylJ6QGv8AMfTrJlLaEVYmNltvoIuo5Srab3gK1j7puJZY6W/H62kH5QubwMw9IKenxkUqd9pkXvaBNr85TL69by3QgDS43v0+Mlb3/v8ArAgfXMS6S/3A5iRe8yBbjQ25QLcKdCbHvEq2Guxk1OjHvfrLSw+tPnKBUI3Atve8exuNvnJTTS3wmRb/AFvAXmr0PyjkhL7m0UDVZZWXoYs0AZFMA+ojt0k3jvaAwf46yye9u37SL9Pr0gR84FxzGJRtAyfWkAR0vMSzKghFeXbn8Ir8v4hn2gYD/CZAwO5+vWYlHrMgW3OBmybDWQ42vp0tHlNrzGx/iUU4KtfS3X95kVeYt8P2mE36GZUQWuDY7Zf1gZPLv6cj/f8ASY16W067/OModOUi5uSG16bQGp5aW9Y1qa2ax+vwmNEzHoZkKdr+m8gypQDbHtraOYSByJHa8JRrIWjvFeRTBjvC/WezheHpszea2VQhbQgEkW90E6Xtf1tDNpxGXjAvC03CYbBvolSpTbl5oUg/7dPiSJ4+IcKq0SAy6N9lhqreh/STLNdSJnHaXktHaCG0oyugyxi8lhAHpCLzX7WgDLz3Gg9TAKb3gJT85QXpECAdVuBFm/mBkuR6HftC457/AIyCSen5Rqb6mB6SdL3/AGlMhWxuDcXsCCR2PftMVKqL6n69JJHO9jy7/tKHVa5ERpC/630hSqXJvtMuRT6fjAx3367fRlodbc/wkugB3v8AtEFv1vfQSK9FyOUJiPYmKVGrXWUwgISKZX4xARxXgO023CONGkDSqL5uHb7SHl3Q8m5zU3jBkxlm1YmMS3XG+EZQK1I+Zh2+y43XorjkeV+3XSalDy/ObXw7xfyWymxpPoytquvUHl1/tNnxvwwxHnYcA0zupIzIelzuO++0mcTiXGNXktyX9J9/5c0dpJFv3E9GIw7Jo6lTa4uCL+l55r2mnfOTUkbGZVOl9P1HeYieX5SqbW2P8QGrRst9fow02EpEF9zAi4HKMAEzMVGx0kbaDSUIADQfa7/pGzFjYix200ip7iw/mUSDoZA6a8tvWU6EbHb5RKedye8Mx9R+kopa/UWv2vrJyHkb26xo99IAEXA1HygLMR960cZXawG3OEDWK0cRIJvtFtIotGDHAwGYpkp0WKlgrZVtmYAkC+gueV5jgM9bTq/DXHWyGgWtcWHO4ta2uxGw6jTlryqrra02HDaGHa61qj0m+64UVE7h1BDD1F/SZtXMYctXSrq15bN9i7PoRcDaa2twoH7Jt2Os2uF0A851q07gefRYO4vtnpMQ9r6XYKfXQTYVeAV7FkQ1UBtmpgtbsy/aQ9mAM8Exq6U9H7Ha14ZuNCmlFYryxjE9J+ftcRWwTruPltMS76/hOoImGphUbdROlN3/AKh59f8Aj899G/pPmPDQmxOh/eZGomwPSe9+Fj7pI9f7RLw083neNxpe9863B95E45M+sPGNeWvK8Rt8eU2a8PHMkzOmGQfcBPU3/e34TM7rTh1pwLdz3xHr4y0ha+99+msHXawtvvex9J1p435VHy1p0lJvmqCmvmtrtmtoOWk5fEOWN9ultrTenq8/aOjy7vZf1Yxe8Tb2RH3li80Dca8ukQJ3vbTbr6SKlo0E7PAbDtMinUafKQCBbfvfrKD6m4ty+u8gyB+hhDyx9aQlGpEIH4x2kUhGIaRWgfQq3DELf0TVadDD01Vs4ZWqVT7vmOFLBQrMwbM1rJTW18pE8GD8MYd8OMQMS9MhmXO6hKbMCuXIxIIIzXtqSoJFiGC+nwz7LeJ4jLV8lKSghh/UEqGsb2KAF7eoG8w+PPB3EcJ/i4lUNE2UNR//ABXUkLlsCupOpGpJ1JJkV6eGcNwtJncY+k9WqlanSdxYqx85HqVAWsoKqApJv/jXsba87x/hdCj5fk4gVgynNYAZWVmUiwJ0Nrg3vY9LE6qhRZ2CICzHQKASSegA1Jm5xXg/H0qfm1MHXWmBcsabaDqw5fGVGkBnWYTx7ikpBSQai2CVtquUbK7D7adj0Gs8uE8D8RqgMmDrEMAQShUEHUH3rT01PZ9xBa1Gi9HI9csKWZ0AJRc7g2Y2067wRmHtHjdK1v6zDJVYb1KZ8qof82XQ/Ke+liuEVRYVMRQc3sXCugvtfLqQJ6G9inEcl/Mw2b/xzvf0v5dr/GcJjeCYjD1zhqtJxWBsUAudrgi18wI1uJxto0s9+lxHcacREW6R+9u30dlW4RhrXTiGHJ6HMv5Azy4rB4ZRpjqLNzGWqB/uyTmcJwuo1ZKDjymdlUGqCgXMbAtcXtrvabTxn4QrcNrClUIYMuZKgBCsPvAdwdCPQ85zna1eyvHNeO/X5eDqV6K71b/5FJH42ngxHEh9wE9zp+AM6b2aeCKPEzWWpWem1LIQFCm4bNffoVHzmt9oXhlOH4z+mpuzjylqXYC/vFhbT/LLXbUjv1Z1eN7m8YrMV+DnnqljcnWT8T+kp8K6rmam4W9rlTa/LX4THTNuc9MRjo+Pe02mbTOZlFU66fzGljvCprYH5xDbf0hlk8vob6dNYwun0fw3mPKRaWGt9aiUT8YSyRzGvpCFa0C8BEDGZBLwBMRjUSD7xR4jjuL8AvhS6YqjVSk3l1MrVVpoge7G1ripmIv922u02HDPDXEKfAsThsRnxGJrBhTpNUDlMwVVHmM1tCC+9hy1ng9geZ+HYykjFX81srDdWeiqhh6Fb/Ccx7NuJY7GYnG062Lq+Y+AroDUqMqJUBVUaw0XKWY3A0u3WRpvPZdwnFcIxIXG4cIuLK0qbBqTsKq3YA5WJClc9+4WbbgPFeOPxmpRqg/0SVaga9FVp+Vr5ZSpbMWIy294767ThKXCKuC4lw01cemLL4lLhKzVQlqiKb5jpcP05GdP7cvFGPwtdMPQrmnh61G5KqofMGZXAe2YaZDoQdZRufaD4nxdPCU6nDqhX/nKmHvTpJU91FcWClSLBqZFx0nyXi/ijiorUauKq1RWpXqURUpKhGYFCyrlFwbEbW0ndcB8SYjh3h2hWwqo7nFPTIdWYBWNVibKQb3Ua95868UeKcTxKqlXECnmVMi5FKi2YnUEnmT84gmX23xriOJjFcMXBGpZgfPst6RANO5qkiwFi3fprOyxrJRbEYsgHy6ADWtmtSFWqVvvs66T1VcWiVKeHLWeojlNv+3kDWvz98G3YziPAnDsSicRwGMdnrPUeoKr7VadamKQZTtYeWLqPs3AkVofA/i7/jrVsFxChRsyGpRKAhlAIBALE+8AwIYW2N52XH/DNPGYKngcRUviAh8qqftF6QC5+9wRmHMMfUfIvYlgqicWCMrBqVOqKoP3bDIQenvECfRPbJjHTB0Mbh2tUw+MBDD/ANlFx6FrAj4So4v2RLUwPF3wdYZajU6lMjlmW1RSOoIQ2PMNPpXi/wAS1cJ/WmlTpl6GEo4hC4JuXq1abK1iDlC0gRYjUmabBtS4uMLxTDgLjMNUQV6fMpf/ABU/2lmQ9yPTd+IcVVoYjGV6CZ6q8ORqaZS2Zkq4gqMq6nVthEkPiXjDxzxHH0UpYlKSUvMFRciOtyoI0ZmNxZ/xE5CoQTpcTrPGfiLiWP8AL/rKCoKRYrlpVEPvgXBzk6e6PlOVqU+Z/OWGZD35coC/SSvrtMha+vPttCESYK4gTbUQLc9IVkzmEhWtzA9RHKjWyor39IWmVJ4LAxoYHc+zr2htwrzUGHFZKrKSM+RgVBGhykHf8J6vA3HMGeJ4yrXY4fDYqliFGbdPPZSVBAIFrtYkW0E+fgT2cN4c9dgiW1IUX6sbKABqSTyAJ36QZfW8P7OuF01OMwnEPNOHHn2D0ql/JHmWOSxF8s5P2jeP6fFkw/8Ay7Ua1Jn1LB0KOBfWwN7onLrOUx/BfLRKnmU3V1JUrnBJV8jCzqpuDrtawOs8BUW2hcvp/s+9qicOwy4WphWqKGZs6OL+8b/YYW/+p3K+1vhFZGNQMj5SQtahe5A0F0zL8zPz1RF7DQXNtdALnmeQmenhmd1poud2YIgXmxNhaMES+g+P/agmNbC1MGlajVw9RnDvkH2lA0ysemx0IhxP2zY6oMP5aU6T0nLVWGqVfdyhSh1VdWuLnWxBFpxGD4O71jQzIGGjXN9QLsAFBJI1v0sZPG+EvhmRXKnOgdSA6+6SVF1qKrD7J3Gu4uIMvoHEvbNiWpuKGEo0a7izVw2Y7WBClRqOWYtadImHNfwkbkswpPUJOpvSxLVCb9fcM+N/8KrrT800avl5Q2fI2UKdjmta3eXgOM4iirpSrOiVFZKiA3R1ZSrBkPunQkXtccjGDLZeCfFtXh2JWuovTPu1E5Ol9f8AUNweva8+pePPaC2Er4XF4MUqtPE4ZtXzWslQHQqRlYZiCDexnw6kpGg3tPfjuH4laa+ZTrLSQkoWRgg8zLfUiwvZdISJfWuG+3VD/wBRgai9TSqK9/8AS4W3znxQ1WqEu32mJY37kky7/H0jIG4vKZBHx7iCHr/aK3wjB01hBaxsTp15Rn09JHaMH1gUx+jHDJ6fGEDXR3iEUirkkQvGIAGmz4PxQYcvUVb1TTK0yQGCFiA7WYG5yZ1H+a/Ka3JAQO64RxPzFoVq1FWpUiyVqtZAyEXLClSQWGbKyWXqSQAC5N169DC02p4nDUDXSrnp0wjK2X7J80tc5TfMEYD7PQqJwV5ZMDsU8TYEqytgtC9V0UFbDOadrm19kYaWsGNtbEarEcepHEGtSw6oDSCFBcKGKBWZcmXLc326nrporcrQC9/jA3fAuLrh/MazA1QKd0bKyU2N6hQ8n0UDlbMDvN3Q45gaLBPI/qCilfMAymoXFncu3vg/eXQEHQW1ZuKA1vMi6nWUdrjPFmFqsTWwhrEsXzu4zlijg3IGiBihCD3QE26+ehx/BKKgGCAVvKZUzX96nTYG7MCcpYhrDfW9xpOUz305QywZdlh/E2DSt5i4EIwYurK1mV86Mlh9nKoVvdFr5rHmTqPE3GKWIZSiFbL7zOczsx1bM33iTf3j2sFGk0ZuNYyYF5PS/Yxo38TEF57TIKg2YX6HYwir8vlIGv1aUB0P9oWO3OAzp9Wgrc/zkmMHmBAD2/OEZpQga+FoWhIpkQAkyi0AzaRgGA6y25AfRgRaNrcgfnHtJMos9/jAnlaHY9YnWEWPWCnlMYl7XgXfT6+MYMxgWP6Sm17dIFDXv2/SDdxIvHmIgMHfTT62jX5iJgbSgdrHXc9oDtrp8pR6yD6TJcDT6I9IE25/KUhB+tPnJca20I7SivTUQHb61hC/WEDX3iiBjvIoJjBkxwG0atpEsFgZLaX7yTGWPWEoAZQkqpEZW23OAASn005RZoED8IClL3kmMG/SBZXvC8mxgIRk9P5jX8ZMY3107wDX0lAi3flIPPrymRBpe+o5H8xAIgbfV4wL+sducKLHrFLR+9vhCEayUsISKLRXhCAwZkOsIQEDGp2hCBSbfG0or+cISjGd4GEIFLBRyhCEO24iEIQqwL/AXjBufxhCEQRLvr8IQhV23EknWEIGSn72/pCEIH//2Q==", "alt", "", 1, "logo-client-mobile", 2, "width", "15%"], [1, "col-6", "menu", "pt-5", "all-12"], [1, "row", "text-right"], [1, "col-3"], [1, "col-3", "menu-active"], [1, "col-6", "mt-5", "all-12"], [1, "name-company"], [1, "desc-company"], [1, "phone-company"], ["aria-hidden", "true", 1, "fa", "fa-phone", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp", "mr-2"], [1, "end-company"], ["aria-hidden", "true", 1, "fa", "fa-globe", "mr-2"], [1, "col-6", "text-center", "all-12"], [1, "p-0", "col-8", "m-auto", "contact-form", "all-12"], [1, "col-12", "title-contact", "m-auto"], [1, "col-12", "mr-auto", "ml-auto", "mt-3", "text-left"], [1, "form-group"], ["for", "nome"], ["type", "text", "id", "nome", "name", "nome", "required", "", "placeholder", "Seu nome aqui", 1, "form-control"], ["for", "exampleInputEmail1"], ["type", "email", "id", "email", "name", "email", "required", "", "placeholder", "exemplo@email.com.br", 1, "form-control"], ["for", "telefone"], ["type", "text", "id", "telefone", "name", "telefone", "required", "", "placeholder", "(xx) xxxxx-xxxx", 1, "form-control"], ["for", "mensagem"], ["id", "mensagem", "name", "mensagem", "required", "", "rows", "2", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "col-12", "mb-2"], [1, "fa", "fa-envelope"], [1, "col-12"], [1, "col-12", "title", "mt-4", "text-center"], [1, "col-12", "mt-4"], [1, "col-9", "mr-auto", "ml-auto", "mb-4", "mt-4", "description-all"], [1, "col-12", "mt-2", "mb-2"], [1, "col-12", "mt-3", "mb-2", "title", "text-center"], [1, "row", "mt-3"], [1, "col-4", "infos-title"], ["aria-hidden", "true", 1, "fa", "fa-clock-o", 2, "color", "#563D7C"], ["aria-hidden", "true", 1, "fa", "fa-user-o", 2, "color", "#563D7C"], ["aria-hidden", "true", 1, "fa", "fa-credit-card", 2, "color", "#563D7C"], [1, "row", "mb-5"], [1, "col-4"], ["class", "col-12 text-center infos-all", 4, "ngFor", "ngForOf"], [1, "col-4", "text-center"], [1, "col-12", "info-rede"], ["style", "cursor: pointer;", 4, "ngIf"], [1, "row", "text-center"], ["class", "col-12 infos-all", 4, "ngIf"], [1, "col-9", "ml-auto", "mr-auto", "mt-2", "mb-2"], [4, "ngIf"], [1, "col-12", "mt-2", "title", "text-center"], [1, "col-12", "mt-4", "mb-4", "p-0"], ["width", "100%", "height", "600", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0", 3, "src"], [1, "col-12", "text-center", "infos-all"], [2, "cursor", "pointer"], ["aria-hidden", "true", 1, "fa", "fa-facebook-official"], ["aria-hidden", "true", 1, "fa", "fa-facebook-instagram"], ["aria-hidden", "true", 1, "fa", "fa-facebook-twitter"], [1, "col-12", "infos-all"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", "style", "width: 70%;"], [1, "picsum-img-wrapper"], [1, "img-responsive", 2, "width", "100%", 3, "src"]],
      template: function VisualizarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VisualizarComponent_Template_div_click_4_listener() {
            return ctx.goVoltar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "voltar para ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "inicio ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Classifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " SOBRE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " FOTOS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " ENDERE\xC7O ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " CONTATO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "mask");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "mask");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " ENTRE EM CONTATO ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "fieldset", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Nome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "fieldset", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "E-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "fieldset", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Cel/WhatsApp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "fieldset", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Sua mensagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "textarea", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Enviar mensagem");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Conhe\xE7a a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Mais ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "informa\xE7\xF5es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Hor\xE1rio de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "atendimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " Siga-nos nas ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Redes sociais");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Formas de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "pagamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, VisualizarComponent_span_121_Template, 2, 4, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](122, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, VisualizarComponent_b_125_Template, 2, 0, "b", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, VisualizarComponent_b_126_Template, 2, 0, "b", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, VisualizarComponent_b_127_Template, 2, 0, "b", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](130, VisualizarComponent_span_130_Template, 2, 0, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](131, VisualizarComponent_span_131_Template, 2, 0, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](132, VisualizarComponent_span_132_Template, 2, 0, "span", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Galeria de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "fotos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](141, VisualizarComponent_ngb_carousel_141_Template, 3, 3, "ngb-carousel", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Localiza\xE7\xE3o ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "iframe", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.company.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.company.description, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](41, 16, ctx.company.contact.tel, "(00) 0000-0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](48, 19, ctx.company.contact.cel, "(00) 00000-0000"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.address.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.description_all);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](122, 22, ctx.company.information.schedule));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.information.redes.facebook !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.information.redes.instagran !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.information.redes.twitter !== "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.information.payment.money);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.information.payment.credit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.information.payment.debit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.company.images);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.getSafeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbSlide"]],
      pipes: [ngx_mask__WEBPACK_IMPORTED_MODULE_5__["MaskPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: ["body[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.img-body[_ngcontent-%COMP%] {\n  background-image: url('shopping-center-318602_1920.jpg');\n  height: auto;\n  padding-bottom: 2%;\n}\n\n.back[_ngcontent-%COMP%] {\n  background-color: #563D7C;\n  color: white;\n  height: 55px;\n  line-height: 45px;\n  font-size: 24px;\n  font-family: \"Varta\", sans-serif;\n}\n\n.menu[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Varta\", sans-serif;\n}\n\n.menu-active[_ngcontent-%COMP%] {\n  font-family: \"Varta\", sans-serif;\n}\n\n.name-company[_ngcontent-%COMP%] {\n  font-size: 4.2rem;\n  font-weight: 700;\n  padding: 2rem 0;\n  color: white;\n  font-family: \"Varta\", sans-serif;\n}\n\n.desc-company[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1rem;\n  font-weight: 100;\n  padding: 2rem 0;\n  font-family: \"Varta\", sans-serif;\n}\n\n.phone-company[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 100;\n  padding: 2rem 0;\n  font-family: \"Varta\", sans-serif;\n}\n\n.end-company[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.5rem;\n  font-weight: 100;\n  padding: 2rem 0;\n  font-family: \"Varta\", sans-serif;\n}\n\n.title-contact[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: white;\n  height: 40px;\n  line-height: 40px;\n  background-color: #563D7C;\n  border-radius: 4px 4px 0 0;\n  font-family: \"Varta\", sans-serif;\n}\n\n.contact-form[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  height: auto;\n  background-color: white;\n  float: right;\n  font-family: \"Varta\", sans-serif;\n}\n\n.voltar[_ngcontent-%COMP%] {\n  color: white;\n  font-family: \"Varta\", sans-serif;\n  cursor: pointer;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.2;\n  font-size: 3rem;\n  font-family: \"Varta\", sans-serif;\n}\n\n.description-all[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-family: \"Varta\", sans-serif;\n  font-weight: 100;\n  text-align: justify;\n  line-height: 2rem;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: 1px dashed #2125293d;\n}\n\n.infos-title[_ngcontent-%COMP%] {\n  font-family: \"Varta\", sans-serif;\n  font-size: 1.7rem;\n  font-weight: 200;\n  text-align: center;\n  line-height: 2rem;\n}\n\n.info-rede[_ngcontent-%COMP%] {\n  font-family: \"Varta\", sans-serif;\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 2rem;\n}\n\n.info-payment[_ngcontent-%COMP%] {\n  font-family: \"Varta\", sans-serif;\n  font-size: 2rem;\n  font-weight: 700;\n  text-align: center;\n  line-height: 2rem;\n}\n\n.tag-header[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n\n.tage-header[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: chocolate;\n}\n\n@media screen and (max-width: 800px) {\n  .logo-client-mobile[_ngcontent-%COMP%] {\n    width: 50% !important;\n  }\n\n  .all-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n\n  .all-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n  }\n\n  .infos-title[_ngcontent-%COMP%] {\n    font-size: 12px;\n    font-family: \"Varta\", sans-serif;\n  }\n\n  .info-rede[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  .infos-all[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL1BhZ2VzL3Zpc3VhbGl6YXIvYXBwLXZpc3VhbGl6YXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL1BhZ2VzL3Zpc3VhbGl6YXIvYXBwLXZpc3VhbGl6YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFFSSx3REFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUNBSjs7QURJQTtFQUNJLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksNEJBQUE7QUNESjs7QURJQTtFQUNJLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURNQTtFQUNJO0lBQ0kscUJBQUE7RUNITjs7RURLRTtJQUNJLGtCQUFBO0VDRk47O0VESUU7SUFDSSxjQUFBO0lBQ0EsZUFBQTtFQ0ROOztFREdFO0lBQ0ksZUFBQTtJQUNBLGdDQUFBO0VDQU47O0VERUU7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxlQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL1BhZ2VzL3Zpc3VhbGl6YXIvYXBwLXZpc3VhbGl6YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5pbWctYm9keSB7ICAgIFxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvc2hvcHBpbmctY2VudGVyLTMxODYwMl8xOTIwLmpwZycpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5iYWNrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTYzRDdDO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDU1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xufVxuXG4ubWVudSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xufVxuXG4ubWVudS1hY3RpdmUge1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xufVxuXG4ubmFtZS1jb21wYW55IHtcbiAgICBmb250LXNpemU6IDQuMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHBhZGRpbmc6IDIuMHJlbSAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ1ZhcnRhJywgc2Fucy1zZXJpZjtcbn1cblxuLmRlc2MtY29tcGFueSAge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBwYWRkaW5nOiAyLjByZW0gMDtcbiAgICBmb250LWZhbWlseTogJ1ZhcnRhJywgc2Fucy1zZXJpZjtcbn1cblxuLnBob25lLWNvbXBhbnkge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmc6IDIuMHJlbSAwO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xufVxuXG4uZW5kLWNvbXBhbnl7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgcGFkZGluZzogMi4wcmVtIDA7XG4gICAgZm9udC1mYW1pbHk6ICdWYXJ0YScsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZS1jb250YWN0IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IHdoaXRlOyAgICBcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QzsgICAgXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gICAgZm9udC1mYW1pbHk6ICdWYXJ0YScsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xufVxuXG4udm9sdGFyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdWYXJ0YScsIHNhbnMtc2VyaWY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC1mYW1pbHk6ICdWYXJ0YScsIHNhbnMtc2VyaWY7XG59XG5cblxuLmRlc2NyaXB0aW9uLWFsbCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuaHIge1xuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjMjEyNTI5M2Q7XG59XG5cbi5pbmZvcy10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6ICdWYXJ0YScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbi5pbmZvLXJlZGUge1xuICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLmluZm8tcGF5bWVudCB7XG4gICAgZm9udC1mYW1pbHk6ICdWYXJ0YScsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4udGFnLWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4udGFnZS1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMzBweDsgICAgICAgIFxuICAgIGNvbG9yOiBjaG9jb2xhdGU7XG59XG5cbi8vIE1PQklMRVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5sb2dvLWNsaWVudC1tb2JpbGUge1xuICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hbGwtY2VudGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYWxsLTEyIHtcbiAgICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmluZm9zLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ1ZhcnRhJywgc2Fucy1zZXJpZjtcbiAgICB9XG4gICAgLmluZm8tcmVkZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmluZm9zLWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59IiwiYm9keSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmltZy1ib2R5IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlbnMvc2hvcHBpbmctY2VudGVyLTMxODYwMl8xOTIwLmpwZ1wiKTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG59XG5cbi5iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QztcbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcnRhXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5tZW51IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJWYXJ0YVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubWVudS1hY3RpdmUge1xuICBmb250LWZhbWlseTogXCJWYXJ0YVwiLCBzYW5zLXNlcmlmO1xufVxuXG4ubmFtZS1jb21wYW55IHtcbiAgZm9udC1zaXplOiA0LjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJWYXJ0YVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uZGVzYy1jb21wYW55IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnBob25lLWNvbXBhbnkge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nOiAycmVtIDA7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcnRhXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5lbmQtY29tcGFueSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHBhZGRpbmc6IDJyZW0gMDtcbiAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlLWNvbnRhY3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU2M0Q3QztcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcnRhXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWN0LWZvcm0ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnZvbHRhciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlZhcnRhXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5kZXNjcmlwdGlvbi1hbGwge1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtZmFtaWx5OiBcIlZhcnRhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjMjEyNTI5M2Q7XG59XG5cbi5pbmZvcy10aXRsZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlZhcnRhXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBmb250LXdlaWdodDogMjAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uaW5mby1yZWRlIHtcbiAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4uaW5mby1wYXltZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xufVxuXG4udGFnLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnRhZ2UtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogY2hvY29sYXRlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubG9nby1jbGllbnQtbW9iaWxlIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYWxsLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmFsbC0xMiB7XG4gICAgZmxleDogMCAwIDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmluZm9zLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC1mYW1pbHk6IFwiVmFydGFcIiwgc2Fucy1zZXJpZjtcbiAgfVxuXG4gIC5pbmZvLXJlZGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5pbmZvcy1hbGwge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisualizarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-visualizar',
          templateUrl: './app-visualizar.component.html',
          styleUrls: ['./app-visualizar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _Pages_anuncie_app_anuncie_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./Pages/anuncie/app-anuncie.component */
    "./src/app/Pages/anuncie/app-anuncie.component.ts");
    /* harmony import */


    var _Pages_anunciante_app_anunciante_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Pages/anunciante/app-anunciante.component */
    "./src/app/Pages/anunciante/app-anunciante.component.ts");
    /* harmony import */


    var _Pages_adquirir_app_adquirir_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Pages/adquirir/app-adquirir.component */
    "./src/app/Pages/adquirir/app-adquirir.component.ts");
    /* harmony import */


    var _Pages_cadastroEmpresa_app_cadastroEmpresa_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Pages/cadastroEmpresa/app-cadastroEmpresa.component */
    "./src/app/Pages/cadastroEmpresa/app-cadastroEmpresa.component.ts");
    /* harmony import */


    var _Pages_cadastroUsuario_app_cadastroUsuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Pages/cadastroUsuario/app-cadastroUsuario.component */
    "./src/app/Pages/cadastroUsuario/app-cadastroUsuario.component.ts");
    /* harmony import */


    var _Pages_cadastrofaturamento_app_cadastrofaturamento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Pages/cadastrofaturamento/app-cadastrofaturamento.component */
    "./src/app/Pages/cadastrofaturamento/app-cadastrofaturamento.component.ts");
    /* harmony import */


    var _Pages_faturamento_app_faturamento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Pages/faturamento/app-faturamento.component */
    "./src/app/Pages/faturamento/app-faturamento.component.ts");
    /* harmony import */


    var _Pages_login_app_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Pages/login/app-login.component */
    "./src/app/Pages/login/app-login.component.ts");
    /* harmony import */


    var _Pages_recuperarAcesso_app_recuperarAcesso_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Pages/recuperarAcesso/app-recuperarAcesso.component */
    "./src/app/Pages/recuperarAcesso/app-recuperarAcesso.component.ts");
    /* harmony import */


    var _Pages_representante_app_representante_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Pages/representante/app-representante.component */
    "./src/app/Pages/representante/app-representante.component.ts");
    /* harmony import */


    var _Pages_section_app_section_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Pages/section/app-section.component */
    "./src/app/Pages/section/app-section.component.ts");
    /* harmony import */


    var _Pages_visualizar_app_visualizar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Pages/visualizar/app-visualizar.component */
    "./src/app/Pages/visualizar/app-visualizar.component.ts");

    var routes = [{
      path: '',
      component: _Pages_section_app_section_component__WEBPACK_IMPORTED_MODULE_12__["SectionComponent"]
    }, {
      path: 'anuncie',
      component: _Pages_anuncie_app_anuncie_component__WEBPACK_IMPORTED_MODULE_2__["AnuncieComponent"]
    }, {
      path: 'adquirir',
      component: _Pages_adquirir_app_adquirir_component__WEBPACK_IMPORTED_MODULE_4__["AdquirirComponent"]
    }, {
      path: 'anunciante',
      component: _Pages_anunciante_app_anunciante_component__WEBPACK_IMPORTED_MODULE_3__["AnuncianteComponent"]
    }, {
      path: 'cadastroEmpresa',
      component: _Pages_cadastroEmpresa_app_cadastroEmpresa_component__WEBPACK_IMPORTED_MODULE_5__["CadastroEmpresaComponent"]
    }, {
      path: 'cadastroUsuario',
      component: _Pages_cadastroUsuario_app_cadastroUsuario_component__WEBPACK_IMPORTED_MODULE_6__["CadastroUsuarioComponent"]
    }, {
      path: 'cadastrofaturamento',
      component: _Pages_cadastrofaturamento_app_cadastrofaturamento_component__WEBPACK_IMPORTED_MODULE_7__["CadastroFaturamentoComponent"]
    }, {
      path: 'faturamento',
      component: _Pages_faturamento_app_faturamento_component__WEBPACK_IMPORTED_MODULE_8__["FaturamentoComponent"]
    }, {
      path: 'login',
      component: _Pages_login_app_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    }, {
      path: 'recuperarAcesso',
      component: _Pages_recuperarAcesso_app_recuperarAcesso_component__WEBPACK_IMPORTED_MODULE_10__["RecuperarAcessoComponent"]
    }, {
      path: 'representante',
      component: _Pages_representante_app_representante_component__WEBPACK_IMPORTED_MODULE_11__["RepresentanteComponent"]
    }, {
      path: 'visualizar',
      component: _Pages_visualizar_app_visualizar_component__WEBPACK_IMPORTED_MODULE_13__["VisualizarComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent(dialog) {
      _classCallCheck(this, AppComponent);

      this.dialog = dialog;
      this.title = 'Classificae';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Varta\", sans-serif;\n}\n\n.tag-header[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.tage-header[_ngcontent-%COMP%] {\n  font-size: 40px;\n  color: chocolate;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3JhbmRyYWRlL0Rlc2t0b3AvRXN0dWRvL3BvcnRhbC9jbGFzc2lmaWNhZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOjA7XG59IFxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogJ1ZhcnRhJywgc2Fucy1zZXJpZjtcbn1cblxuLnRhZy1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRhZ2UtaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDQwcHg7ICAgICAgICBcbiAgICBjb2xvcjogY2hvY29sYXRlO1xufSIsIioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJWYXJ0YVwiLCBzYW5zLXNlcmlmO1xufVxuXG4udGFnLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnRhZ2UtaGVhZGVyIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogY2hvY29sYXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Pages_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Pages/header/app-header.component */
    "./src/app/Pages/header/app-header.component.ts");
    /* harmony import */


    var _Pages_content_app_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./Pages/content/app-content.component */
    "./src/app/Pages/content/app-content.component.ts");
    /* harmony import */


    var _Pages_section_app_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./Pages/section/app-section.component */
    "./src/app/Pages/section/app-section.component.ts");
    /* harmony import */


    var _Pages_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./Pages/footer/app-footer.component */
    "./src/app/Pages/footer/app-footer.component.ts");
    /* harmony import */


    var _Pages_adquirir_app_adquirir_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./Pages/adquirir/app-adquirir.component */
    "./src/app/Pages/adquirir/app-adquirir.component.ts");
    /* harmony import */


    var _Pages_anuncie_app_anuncie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Pages/anuncie/app-anuncie.component */
    "./src/app/Pages/anuncie/app-anuncie.component.ts");
    /* harmony import */


    var _Pages_anunciante_app_anunciante_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./Pages/anunciante/app-anunciante.component */
    "./src/app/Pages/anunciante/app-anunciante.component.ts");
    /* harmony import */


    var _Pages_categoria_app_categoria_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Pages/categoria/app-categoria.component */
    "./src/app/Pages/categoria/app-categoria.component.ts");
    /* harmony import */


    var _Pages_cadastroUsuario_app_cadastroUsuario_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./Pages/cadastroUsuario/app-cadastroUsuario.component */
    "./src/app/Pages/cadastroUsuario/app-cadastroUsuario.component.ts");
    /* harmony import */


    var _Pages_cadastroEmpresa_app_cadastroEmpresa_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Pages/cadastroEmpresa/app-cadastroEmpresa.component */
    "./src/app/Pages/cadastroEmpresa/app-cadastroEmpresa.component.ts");
    /* harmony import */


    var _Pages_faturamento_app_faturamento_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Pages/faturamento/app-faturamento.component */
    "./src/app/Pages/faturamento/app-faturamento.component.ts");
    /* harmony import */


    var _Pages_login_app_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Pages/login/app-login.component */
    "./src/app/Pages/login/app-login.component.ts");
    /* harmony import */


    var _Pages_recuperarAcesso_app_recuperarAcesso_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Pages/recuperarAcesso/app-recuperarAcesso.component */
    "./src/app/Pages/recuperarAcesso/app-recuperarAcesso.component.ts");
    /* harmony import */


    var _Pages_representante_app_representante_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Pages/representante/app-representante.component */
    "./src/app/Pages/representante/app-representante.component.ts");
    /* harmony import */


    var _Pages_visualizar_app_visualizar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Pages/visualizar/app-visualizar.component */
    "./src/app/Pages/visualizar/app-visualizar.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js"); // import { CadastroFaturamentoComponent } from './Pages/cadastroFaturamento/app-cadastroFaturamento.component';


    var maskConfig = {
      validation: false
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], br_mask__WEBPACK_IMPORTED_MODULE_22__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_23__["NgxMaskModule"].forRoot(maskConfig)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Pages_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _Pages_content_app_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _Pages_section_app_section_component__WEBPACK_IMPORTED_MODULE_7__["SectionComponent"], _Pages_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _Pages_adquirir_app_adquirir_component__WEBPACK_IMPORTED_MODULE_9__["AdquirirComponent"], _Pages_anuncie_app_anuncie_component__WEBPACK_IMPORTED_MODULE_10__["AnuncieComponent"], _Pages_anunciante_app_anunciante_component__WEBPACK_IMPORTED_MODULE_11__["AnuncianteComponent"], _Pages_categoria_app_categoria_component__WEBPACK_IMPORTED_MODULE_12__["CategoriaComponent"], _Pages_cadastroUsuario_app_cadastroUsuario_component__WEBPACK_IMPORTED_MODULE_13__["CadastroUsuarioComponent"], _Pages_cadastroEmpresa_app_cadastroEmpresa_component__WEBPACK_IMPORTED_MODULE_14__["CadastroEmpresaComponent"], // CadastroFaturamentoComponent,
        _Pages_faturamento_app_faturamento_component__WEBPACK_IMPORTED_MODULE_15__["FaturamentoComponent"], _Pages_login_app_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _Pages_recuperarAcesso_app_recuperarAcesso_component__WEBPACK_IMPORTED_MODULE_17__["RecuperarAcessoComponent"], _Pages_representante_app_representante_component__WEBPACK_IMPORTED_MODULE_18__["RepresentanteComponent"], _Pages_visualizar_app_visualizar_component__WEBPACK_IMPORTED_MODULE_19__["VisualizarComponent"]],
        imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], br_mask__WEBPACK_IMPORTED_MODULE_22__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_23__["NgxMaskModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Pages_header_app_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _Pages_content_app_content_component__WEBPACK_IMPORTED_MODULE_6__["ContentComponent"], _Pages_section_app_section_component__WEBPACK_IMPORTED_MODULE_7__["SectionComponent"], _Pages_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _Pages_adquirir_app_adquirir_component__WEBPACK_IMPORTED_MODULE_9__["AdquirirComponent"], _Pages_anuncie_app_anuncie_component__WEBPACK_IMPORTED_MODULE_10__["AnuncieComponent"], _Pages_anunciante_app_anunciante_component__WEBPACK_IMPORTED_MODULE_11__["AnuncianteComponent"], _Pages_categoria_app_categoria_component__WEBPACK_IMPORTED_MODULE_12__["CategoriaComponent"], _Pages_cadastroUsuario_app_cadastroUsuario_component__WEBPACK_IMPORTED_MODULE_13__["CadastroUsuarioComponent"], _Pages_cadastroEmpresa_app_cadastroEmpresa_component__WEBPACK_IMPORTED_MODULE_14__["CadastroEmpresaComponent"], // CadastroFaturamentoComponent,
          _Pages_faturamento_app_faturamento_component__WEBPACK_IMPORTED_MODULE_15__["FaturamentoComponent"], _Pages_login_app_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"], _Pages_recuperarAcesso_app_recuperarAcesso_component__WEBPACK_IMPORTED_MODULE_17__["RecuperarAcessoComponent"], _Pages_representante_app_representante_component__WEBPACK_IMPORTED_MODULE_18__["RepresentanteComponent"], _Pages_visualizar_app_visualizar_component__WEBPACK_IMPORTED_MODULE_19__["VisualizarComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], br_mask__WEBPACK_IMPORTED_MODULE_22__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_23__["NgxMaskModule"].forRoot(maskConfig)],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      url: 'https://classificae-api.herokuapp.com/api/v1/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/juniorandrade/Desktop/Estudo/portal/classificae/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map