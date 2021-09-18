import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() data:any;
  @Output() squareroot = new EventEmitter<number>();
  
  emitSquareRoot()
  {
   var result =  Math.sqrt(this.data);
    this.squareroot.emit(result);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
