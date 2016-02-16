import {Component, provide} from 'angular2/core';
import {HTTP_PROVIDERS, XHRBackend} from 'angular2/http';
import {InMemoryBackendService, SEED_DATA} from 'a2-in-memory-web-api/core';
import {Hero} from './hero';
import {HeroListComponent} from './hero-list.component';
import {HeroService} from './hero.service';
import {HeroData} from './hero-data';

@Component({
	selector: 'my-toh',
	template: `
		<h1>Tour of Heroes</h1>
		<hero-list></hero-list>
	`,
	directives: [HeroListComponent],
	providers: [
				HTTP_PROVIDERS, 
				HeroService,
				provide(XHRBackend, {useClass: InMemoryBackendService}),
				provide(SEED_DATA, { useClass: HeroData })
				]
})
export class TohComponent {
	
}