System.register(['angular2/core', 'angular2/router', '../dialog.service', './crisis.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, dialog_service_1, crisis_service_1;
    var CrisisDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            },
            function (crisis_service_1_1) {
                crisis_service_1 = crisis_service_1_1;
            }],
        execute: function() {
            CrisisDetailComponent = (function () {
                function CrisisDetailComponent(_router, _crisisService, _routeParams, _dialog) {
                    this._router = _router;
                    this._crisisService = _crisisService;
                    this._routeParams = _routeParams;
                    this._dialog = _dialog;
                }
                CrisisDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id'); //The '+' converts the string parameter to a number
                    this._crisisService.getCrisis(id)
                        .then(function (crisis) {
                        if (crisis) {
                            _this.editName = crisis.name;
                            _this.crisis = crisis;
                        }
                        else {
                            _this.gotoCrisisis();
                        }
                    });
                };
                CrisisDetailComponent.prototype.cancel = function () {
                    this.editName = this.crisis.name;
                    this.gotoCrisisis();
                };
                CrisisDetailComponent.prototype.save = function () {
                    this.crisis.name = this.editName;
                    this.gotoCrisisis();
                };
                CrisisDetailComponent.prototype.routerCanDeactivate = function (next, prev) {
                    // Allow Async nav ('true') if no crisis or the crisis is unchanged.
                    if (!this.crisis || this.crisis.name === this.editName) {
                        return true;
                    }
                    // Otherwise ask the user with the dialog service and return
                    // its promise which resolves to true or false when the user decides 
                    return this._dialog.confirm('Discard changes?');
                };
                CrisisDetailComponent.prototype.gotoCrisisis = function () {
                    this._router.navigate(['CrisisCenter', { id: this.crisis.id, foo: 'foo' }]);
                };
                CrisisDetailComponent = __decorate([
                    core_1.Component({
                        inputs: ['crisis'],
                        styleUrls: ['app/crisis-center/crisis-detail.component.css'],
                        templateUrl: './app/crisis-center/crisis-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, crisis_service_1.CrisisService, router_1.RouteParams, dialog_service_1.DialogService])
                ], CrisisDetailComponent);
                return CrisisDetailComponent;
            })();
            exports_1("CrisisDetailComponent", CrisisDetailComponent);
        }
    }
});
//# sourceMappingURL=crisis-detail.component.js.map