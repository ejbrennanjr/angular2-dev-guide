import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {LittleTourComponent} from './little-tour.component';
import {HeroFormComponent} from './hero-form.component';

@Component({
	selector: 'my-app',
	styleUrls: ['app/app.component.css'],
	template: `
		<h1>{{title}}</h1>
		<nav>
			<a [routerLink]="['LittleTour']">Little Tour</a>
			<a [routerLink]="['HeroForm']">Hero Form</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES],
	providers: [
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
	}
])
export class AppComponent { 
	title = 'Angular Developer Guides';
}
