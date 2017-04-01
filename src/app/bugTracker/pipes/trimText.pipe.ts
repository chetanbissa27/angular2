import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
	name : "trimText"	
})

export class TrimTextPipe implements PipeTransform{
	transform(text : any, trimLength : number = 30):string{
		return text.length > trimLength ? text.substr(0,trimLength) + '...' : text
	}
}