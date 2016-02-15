import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Crisis} from './crisis';
import {CrisisService} from './crisis.service';

@Component({
	styleUrls: ['app/crisis-center/crisis-list.component.css'],
	template: `
		<h2>CRISISIS</h2>
		<ul>
			<li *ngFor="#crisis of crisisis" 
				(click)="onSelect(crisis)"
				[class.selected]="isSelected(crisis)" >
				<span class="badge">{{crisis.id}}</span> {{ crisis.name }}
			</li>
		</ul>
	`
})
export class CrisisListComponent implements OnInit {
	
	public crisisis: Crisis[];
	private _selectedId: number;

	constructor(
		private _router: Router,
		private _crisisService: CrisisService,
		routeParams: RouteParams) {

		this._selectedId = +routeParams.get('id');
	}

	ngOnInit() {
		this._crisisService.getCrisisis()
			.then(crisisis => this.crisisis = crisisis);
	} 

	onSelect(crisis: Crisis) {
		this._router.navigate(['CrisisDetail', { id: crisis.id }]);
	}

	isSelected(crisis: Crisis) {
		return crisis.id === this._selectedId;
	}

}