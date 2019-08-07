import { Component, OnInit } from '@angular/core';
import { ClickArray } from '../click-array';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {
  userName:String;
  clickable:boolean;
  displayButtonClick:boolean;
  noofclicks:number;
  clickArray:ClickArray[];
 
  constructor() { }

  ngOnInit() {   
    this.userName = '';
    this.clickable = false;
    this.displayButtonClick = false;
    this.noofclicks = 0;
    this.clickArray = [];
  }

  getClickable(){
    console.log("*******getClickable*******");
    this.clickable = false;
  }

  changeDisplayButtonClickVar(){
    console.log("*******changeDisplayButtonClickVar*******");
    let obj: ClickArray = new ClickArray(++this.noofclicks, new Date().toLocaleString(),this.displayButtonClick);
    this.clickArray.push(obj);
    if(this.displayButtonClick){      
      this.displayButtonClick = false;      
    }else{
      this.displayButtonClick = true;
    }
    console.log( this.clickArray);
  }
}
