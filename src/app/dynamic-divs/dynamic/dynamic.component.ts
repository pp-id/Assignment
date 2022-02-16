import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  list:number[]=[1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
  }

  AddDiv(){
    let n=0;
    while(n!=10){
      this.list.push(this.list[this.list.length-1]+1);
      n=n+1;
    }}

  all(i:number){
    let p="div"+i;
    alert(p)
  }
}

