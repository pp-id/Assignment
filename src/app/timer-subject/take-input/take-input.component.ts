import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-take-input',
  templateUrl: './take-input.component.html',
  styleUrls: ['./take-input.component.css']
})
export class TakeInputComponent implements OnInit {
  clickS: number=0;
  d: any;

  constructor(private connect:ConnectionService) { }

  ngOnInit(): void {
    this.connect.timercount.subscribe(val=>console.log(val))
  }

  Call(m:any){
    this.connect.setCount(m);
    this.clickS=this.clickS+1
    if(this.clickS%2==0){
      console.log("inside Pause ----------------------")
      this.connect.setClick("pause");
    //   let date=new Date()
    //   this.d=date.getSeconds()
    }
    if(this.clickS%2!==0){
      console.log("inside Start-------------");
      this.connect.setClick("pause");
    }
  }

  reset(){
    console.log('reset')
  }

}
