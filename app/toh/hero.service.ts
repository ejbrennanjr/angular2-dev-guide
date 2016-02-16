import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Hero} from './hero';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class HeroService {
	constructor(private http: Http) {
		// contructor
	}

	private _heroesUrl = 'app/heroes';

	getHeroes() {
		return this.http.get(this._heroesUrl)
			.map(res => <Hero[]>res.json().data) // Note that the data propery is a choice by the server, not part of angular api
			.do(data => console.log(data)) // print to the console
			.catch(this.handleError);
	}

	addHero(name: string) : Observable<Hero> {
		let body = JSON.stringify({ name });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this._heroesUrl, body, options)
						.map(res => <Hero>res.json().data) // Note that the data propery is a choice by the server, not part of angular api
						.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
