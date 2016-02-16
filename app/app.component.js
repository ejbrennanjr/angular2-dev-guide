System.register(['angular2/core', 'angular2/router', './little-tour/little-tour.component', './hero/hero-form.component', './heroes/hero-list.component', './heroes/hero-detail.component', './heroes/hero.service', './crisis-center/crisis-center.component', './toh/toh.component', './wiki/wiki.component', './wiki/wiki-smart.component', './dialog.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, little_tour_component_1, hero_form_component_1, hero_list_component_1, hero_detail_component_1, hero_service_1, crisis_center_component_1, toh_component_1, wiki_component_1, wiki_smart_component_1, dialog_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (little_tour_component_1_1) {
                little_tour_component_1 = little_tour_component_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (toh_component_1_1) {
                toh_component_1 = toh_component_1_1;
            },
            function (wiki_component_1_1) {
                wiki_component_1 = wiki_component_1_1;
            },
            function (wiki_smart_component_1_1) {
                wiki_smart_component_1 = wiki_smart_component_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Angular Developer Guides';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['app/app.component.css'],
                        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<nav>\n\t\t\t<a [routerLink]=\"['LittleTour']\">Little Tour</a>\n\t\t\t<a [routerLink]=\"['HeroForm']\">Hero Form</a>\n\t\t\t<a [routerLink]=\"['CrisisCenter']\">Crisis Center</a>\n\t\t\t<a [routerLink]=\"['Heroes']\">Heroes</a>\n\t\t\t<a [routerLink]=\"['Toh']\">Toh</a> \n\t\t\t<a [routerLink]=\"['Wiki']\">Wiki</a> \n\t\t\t<a [routerLink]=\"['WikiSmart']\">Wiki Smart</a> \n\t\t</nav>\n\t\t<router-outlet></router-outlet>\n\t",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            hero_service_1.HeroService,
                            dialog_service_1.DialogService,
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/little-tour',
                            name: 'LittleTour',
                            component: little_tour_component_1.LittleTourComponent
                        },
                        {
                            path: '/hero-form',
                            name: 'HeroForm',
                            component: hero_form_component_1.HeroFormComponent
                        },
                        {
                            path: '/crisis-center/...',
                            name: 'CrisisCenter',
                            component: crisis_center_component_1.CrisisCenterComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: hero_list_component_1.HeroListComponent
                        },
                        {
                            path: '/hero/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/toh',
                            name: 'Toh',
                            component: toh_component_1.TohComponent
                        },
                        {
                            path: '/wiki',
                            name: 'Wiki',
                            component: wiki_component_1.WikiComponent
                        },
                        {
                            path: '/wiki-smart',
                            name: 'WikiSmart',
                            component: wiki_smart_component_1.WikiSmartComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map