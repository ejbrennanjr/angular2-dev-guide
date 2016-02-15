System.register(['angular2/core', 'angular2/router', './crisis.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, crisis_service_1;
    var CrisisListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (crisis_service_1_1) {
                crisis_service_1 = crisis_service_1_1;
            }],
        execute: function() {
            CrisisListComponent = (function () {
                function CrisisListComponent(_router, _crisisService, routeParams) {
                    this._router = _router;
                    this._crisisService = _crisisService;
                    this._selectedId = +routeParams.get('id');
                }
                CrisisListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._crisisService.getCrisisis()
                        .then(function (crisisis) { return _this.crisisis = crisisis; });
                };
                CrisisListComponent.prototype.onSelect = function (crisis) {
                    this._router.navigate(['CrisisDetail', { id: crisis.id }]);
                };
                CrisisListComponent.prototype.isSelected = function (crisis) {
                    return crisis.id === this._selectedId;
                };
                CrisisListComponent = __decorate([
                    core_1.Component({
                        styleUrls: ['app/crisis-center/crisis-list.component.css'],
                        template: "\n\t\t<h2>CRISISIS</h2>\n\t\t<ul>\n\t\t\t<li *ngFor=\"#crisis of crisisis\" \n\t\t\t\t(click)=\"onSelect(crisis)\"\n\t\t\t\t[class.selected]=\"isSelected(crisis)\" >\n\t\t\t\t<span class=\"badge\">{{crisis.id}}</span> {{ crisis.name }}\n\t\t\t</li>\n\t\t</ul>\n\t"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, crisis_service_1.CrisisService, router_1.RouteParams])
                ], CrisisListComponent);
                return CrisisListComponent;
            })();
            exports_1("CrisisListComponent", CrisisListComponent);
        }
    }
});
//# sourceMappingURL=crisis-list.component.js.map