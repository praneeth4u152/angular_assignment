import { Time } from '@angular/common';

export class ClickArray {
    noOfClicks:number;
    timeStamp:String;
    isEnabled:boolean;

    constructor(noOfClicks:number,timeStamp:String,isEnabled:boolean){
        this.noOfClicks = noOfClicks;
        this.timeStamp = timeStamp;
        this.isEnabled = isEnabled;
    }
}
