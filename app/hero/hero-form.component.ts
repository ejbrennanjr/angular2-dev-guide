import {Component} from 'angular2/core';
import {NgForm} from 'angular2/common';
import {Hero} from './hero';

@Component({
	selector: 'hero-form',
	//template: '<h2>hero form</h2>'
	templateUrl: './app/hero/hero-form.component.html'
})
export class HeroFormComponent {

	powers = ['Really Smart', 'Super Flexible',
				'Super Hot', 'Weather Change', 'Powerful'];

	model = new Hero(18, "Dr IQ",
					 this.powers[0], 'Chuck Overstreet');

	submitted = false;

	active = true;

	onSubmit() {
		this.submitted = true;
	}

	newHero() {
		this.model = new Hero(42, '', '');
		this.active = false;
		setTimeout(() => this.active = true, 0);

	}

	// TODO: Remove when we are done
	get diagnostic() {
		return JSON.stringify(this.model);
	}
}