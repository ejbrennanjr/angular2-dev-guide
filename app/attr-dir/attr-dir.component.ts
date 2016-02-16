import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
	selector: 'my-attr-dir',
	templateUrl: 'app/attr-dir/attr-dir.component.html',
	directives: [HighlightDirective]
})
export class AttrDirComponent {
	color: string;
}