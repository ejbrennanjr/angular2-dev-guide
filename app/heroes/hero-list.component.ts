import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	styleUrls: ['app/heroes/heroes-list.component.css'],
	template: `
		<h2>HEROES</h2>
		<ul>
			<li *ngFor="#hero of heroes" 
				(click)="onSelect(hero)"
				[class.selected]="isSelected(hero)">
				<span class="badge">{{hero.id}}</span> {{ hero.name }}
			</li>
		</ul>
	`
})
export class HeroListComponent implements OnInit {

	public heroes: Hero[];
	private _selectedId: number;

	constructor(
		private _router: Router,
		routeParams: RouteParams,
		private _heroService: HeroService) {

		this._selectedId = + routeParams.get('id');
	}


	ngOnInit() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes);;
	} 

	onSelect(hero: Hero) {
		this._router.navigate(['HeroDetail', { id: hero.id }]);
	}

	isSelected(hero: Hero) {
		return hero.id === this._selectedId;
	}


}