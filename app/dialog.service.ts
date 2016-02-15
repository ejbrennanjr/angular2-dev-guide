import {Injectable} from 'angular2/core';

/** 
 * Async modal dialog service
 * DialogService makes this app easier to test by faking the service
 * TODO: better modal implementation that doesnt use window confirm
 */

@Injectable()
export class DialogService {
	/**
	 * Ask user to confirm an action. 'message' explains the action and choices.
	 * Returns promise resolving to true= confirm or false=cancel
	*/
	confirm(message?:string) {
	 	return new Promise<boolean>((resolve, reject) =>
	 		resolve(window.confirm(message || 'Is it ok?'))
	 	)
 	}
}
