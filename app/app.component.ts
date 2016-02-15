import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LittleTourComponent} from './little-tour/little-tour.component';
import {HeroFormComponent} from './hero/hero-form.component';
import {HeroListComponent} from './heroes/hero-list.component';
import {HeroDetailComponent} from './heroes/hero-detail.component';
import {HeroService} from './heroes/hero.service';
import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {DialogService} from './dialog.service'

@Component({
	selector: 'my-app',
	styleUrls: ['app/app.component.css'],
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['LittleTour']">Little Tour</a>
			<a [routerLink]="['HeroForm']">Hero Form</a>
			<a [routerLink]="['CrisisCenter']">Crisis Center</a>
			<a [routerLink]="['Heroes']">Heroes</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
		HeroService,
		DialogService,
		ROUTER_PROVIDERS
	]
})
@RouteConfig([
	{
		path: '/little-tour',
		name: 'LittleTour',
		component: LittleTourComponent
	},
	{
		path: '/hero-form',
		name: 'HeroForm',
		component: HeroFormComponent
	},
	{
		path: '/crisis-center/...',
		name: 'CrisisCenter',
		component: CrisisCenterComponent,
		useAsDefault: true
	},
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroListComponent
	},
	{
		path: '/hero/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
])
export class AppComponent { 
	title = 'Angular Developer Guides';
}
