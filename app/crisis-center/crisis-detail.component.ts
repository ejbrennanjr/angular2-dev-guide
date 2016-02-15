import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router, CanDeactivate, ComponentInstruction} from 'angular2/router';
import {DialogService} from '../dialog.service';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';


@Component({
	inputs: ['crisis'],
	styleUrls: ['app/crisis-center/crisis-detail.component.css'],
	templateUrl: './app/crisis-center/crisis-detail.component.html' 
})
export class CrisisDetailComponent implements OnInit, CanDeactivate {

	crisis: Crisis;
	editName: string;

	constructor(
		private _router: Router,
		private _crisisService: CrisisService,
		private _routeParams: RouteParams,
		private _dialog: DialogService
	) { }

	ngOnInit() {
		let id = +this._routeParams.get('id'); //The '+' converts the string parameter to a number
		this._crisisService.getCrisis(id)
		.then(crisis => {
			if(crisis) {
				this.editName = crisis.name;
				this.crisis = crisis;
			} else {
				this.gotoCrisisis();
			}
		})
	}
	
	cancel() {
		this.editName = this.crisis.name;
		this.gotoCrisisis();
	}

	save() {
		this.crisis.name = this.editName;
		this.gotoCrisisis();
	}

	routerCanDeactivate(next: ComponentInstruction, 
						prev: ComponentInstruction) : any {
		// Allow Async nav ('true') if no crisis or the crisis is unchanged.
		if(!this.crisis || this.crisis.name === this.editName) {
			return true;
		}

		// Otherwise ask the user with the dialog service and return
		// its promise which resolves to true or false when the user decides 
		return this._dialog.confirm('Discard changes?');
	}

	gotoCrisisis() {
		this._router.navigate(['CrisisCenter', { id: this.crisis.id, foo: 'foo'}]);
	}
	

}