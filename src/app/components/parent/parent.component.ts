import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  value:any; 
  squarerootvalue:any;
  constructor() { }

  ngOnInit(): void {
  }
  getSquareRoot(event:any){

   this.squarerootvalue = event;


  }
}
