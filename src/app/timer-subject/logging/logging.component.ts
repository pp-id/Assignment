import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';


@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit {
clickTime!:string[];
  constructor(private connect:ConnectionService) { }

  ngOnInit(): void {
    this.connect.clickValue.subscribe(val=>
      {
        console.log(val);
        if(val==="pause"){
          this.clickTime.push(new Date().toDateString())
        }
        if(val==="start"){
          this.clickTime.push(new Date().toDateString())
        }

      })
  }

}
