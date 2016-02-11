import {Component} from 'angular2/core';

@Component({
	selector: 'little-tour',
	template: `
		<h2>{{title}}</h2>
		<input #newHero (keyup.enter)="addHero(newHero.value)"
						(blur)="addHero(newHero.value); newHero.value='' ">
		<button (click)="addHero(newHero.value)">Add</button>
		<ul>
			<li *ngFor="#hero of heroes">{{hero}}</li>
		</ul>
	`
})
export class LittleTourComponent {
	title = 'Little Tour'
	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	addHero(newHero:string) {
		if(newHero) {
			this.heroes.push(newHero);
		}
	}
}


/*	



*/

