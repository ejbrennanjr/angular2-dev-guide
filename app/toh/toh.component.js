System.register(['angular2/core', 'angular2/http', 'a2-in-memory-web-api/core', './hero-list.component', './hero.service', './hero-data'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, core_2, hero_list_component_1, hero_service_1, hero_data_1;
    var TohComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (hero_data_1_1) {
                hero_data_1 = hero_data_1_1;
            }],
        execute: function() {
            TohComponent = (function () {
                function TohComponent() {
                }
                TohComponent = __decorate([
                    core_1.Component({
                        selector: 'my-toh',
                        template: "\n\t\t<h1>Tour of Heroes</h1>\n\t\t<hero-list></hero-list>\n\t",
                        directives: [hero_list_component_1.HeroListComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            hero_service_1.HeroService,
                            core_1.provide(http_1.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                            core_1.provide(core_2.SEED_DATA, { useClass: hero_data_1.HeroData })
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TohComponent);
                return TohComponent;
            })();
            exports_1("TohComponent", TohComponent);
        }
    }
});
//# sourceMappingURL=toh.component.js.map