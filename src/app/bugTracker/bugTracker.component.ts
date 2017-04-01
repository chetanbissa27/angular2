import {Component} from '@angular/core';
import {Bug} from './bug-model'


@Component({
	selector: 'bug-tracker',
	templateUrl: 'bugTracker.component.html',
	styleUrls: ['bugTracker.css']
})

export class BugTracker{
	closedBug : number = 0;
	bugList : Array<Bug> = [];

	addNewBug(bugName : string){
		var bug = {
			name:bugName,
			isClosed:false,
			createdAt: new Date()
		}
		this.bugList.push(bug);
	}

	onBugClick(bug){
		bug.isClosed = !bug.isClosed;
	}

	onRemoveCloseClick(){
		this.bugList =  this.bugList.filter(bug => !bug.isClosed)
	}

	getClosedBugCount(){
		return this.bugList.filter(bug => bug.isClosed).length
	}
}