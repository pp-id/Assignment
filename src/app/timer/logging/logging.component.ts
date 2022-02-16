import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrls: ['./logging.component.css']
})
export class LoggingComponent implements OnInit, OnChanges {
@Input() startedAt='';
@Input() pausedAt='';
timeArr:string[]=[];

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: any): void{


   if(this.startedAt && changes.startedAt) this.timeArr.push(this.startedAt);
   if(this.pausedAt && changes.pausedAt) this.timeArr.push(this.pausedAt);
  }

}
