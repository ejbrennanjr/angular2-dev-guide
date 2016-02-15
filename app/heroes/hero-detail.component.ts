import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';


@Component({
	inputs: ['hero'],
	styleUrls: ['app/heroes/hero-detail.component.css'],
	templateUrl: './app/heroes/hero-detail.component.html' 
})
export class HeroDetailComponent implements OnInit {

	hero: Hero;

	constructor(
		private _router: Router,
		private _heroService: HeroService,
		private _routeParams: RouteParams) {
	}

	ngOnInit() {
		let id = +this._routeParams.get('id'); //The '+' converts the string parameter to a number
		this._heroService.getHero(id)
		.then(hero => this.hero = hero);
	}
	
	gotoHeroes() {
		this._router.navigate(['Heroes', {id: this.hero.id, foo: 'foo'}]);
	}
}