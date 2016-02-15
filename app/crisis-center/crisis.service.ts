import {Crisis} from './crisis';
import {CRISISIS} from './mock-crisis';
import {Injectable} from 'angular2/core';

@Injectable()
export class CrisisService{

	getCrisis(id: number | string) {
		return Promise.resolve(CRISISIS)
		.then(
	       crisisis => crisisis.filter(crisis => crisis.id === id)[0] 
		)
	};

	getCrisisis() {
		return Promise.resolve(CRISISIS);
	};
	
	getCrisisisSlowly() {
		return new Promise<Crisis[]>(resolve =>
			setTimeout(() => resolve(CRISISIS), 2000) // 2 seconds
		);
	};


}
